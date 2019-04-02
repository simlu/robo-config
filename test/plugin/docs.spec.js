const fs = require('fs');
const path = require('path');
const tmp = require('tmp');
const expect = require('chai').expect;
const sfs = require('smart-fs');
const { documentFiles, syncDocs } = require('../../src/plugin/docs');

describe('Integration docs.js', () => {
  let dir;
  beforeEach(() => {
    dir = tmp.dirSync({ keep: false, unsafeCleanup: true }).name;
  });

  it('Testing documentFiles', () => {
    expect(documentFiles('root', [
      'vendor',
      'vendor/index.js',
      'page',
      'page/hello',
      'page/hello/index.css',
      'page/world',
      'page/world/index.css',
      'page/world/index.js'
    ])).to.deep.equal([
      '```',
      'root',
      '├─ page',
      '│  ├─ hello',
      '│  │  └─ index.css',
      '│  └─ world',
      '│     ├─ index.css',
      '│     └─ index.js',
      '└─ vendor',
      '   └─ index.js',
      '```',
      ''
    ]);
  });

  it('Testing documentFolder (delete and write)', () => {
    const taskDir = path.join(dir, 'tasks');
    fs.mkdirSync(taskDir);
    fs.mkdirSync(path.join(taskDir, 'scope'));
    fs.writeFileSync(path.join(dir, 'tasks', 'scope', '@task.json'), JSON.stringify({
      tasks: [],
      description: 'This is a task.'
    }));

    const reqDir = path.join(dir, 'reqs');
    const varDir = path.join(dir, 'vars');

    const docDir = path.join(dir, 'docs');
    fs.mkdirSync(docDir);
    fs.mkdirSync(path.join(docDir, 'scope'));
    fs.writeFileSync(path.join(docDir, 'scope', '@unknown.md'), '');

    expect(sfs.walkDir(dir)).to.deep.equal(['tasks/scope/@task.json', 'docs/scope/@unknown.md']);
    expect(syncDocs('plugin-name', taskDir, reqDir, varDir, docDir)).to.deep.equal([
      'Updated: scope/@task.md',
      'Documentation Updated. Please commit and re-run.'
    ]);
    expect(sfs.walkDir(dir)).to.deep.equal(['tasks/scope/@task.json', 'docs/scope/@task.md']);
  });
});