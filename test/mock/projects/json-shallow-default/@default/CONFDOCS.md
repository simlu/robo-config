## Plugin [mock-plugin](https://www.npmjs.com/package/mock-plugin)

- <a name="mock-plugin-task-idx-ref-json-shallow-defaultdefault">:open_file_folder:</a> <a href="#mock-plugin-task-ref-json-shallow-defaultdefault">`json-shallow-default/@default`</a>
  - <a name="mock-plugin-task-idx-ref-json-shallow-defaulttask">:clipboard:</a> <a href="#mock-plugin-task-ref-json-shallow-defaulttask">`json-shallow-default/task`</a>

### :open_file_folder: <a name="mock-plugin-task-ref-json-shallow-defaultdefault">json-shallow-default/@default</a> (<a href="#mock-plugin-task-idx-ref-json-shallow-defaultdefault">`index`</a>)

Task collection description.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;default-shallow-target.json</code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### :clipboard: <a name="mock-plugin-task-ref-json-shallow-defaulttask">json-shallow-default/task</a> (<a href="#mock-plugin-task-idx-ref-json-shallow-defaulttask">`index`</a>)

_Updating `default-shallow-target.json` using <a href="#mock-plugin-strat-ref-default-shallow">default-shallow</a>._

- Some purpose.

<table>
  <tbody>
    <tr>
      <th>Targets</th>
    </tr>
    <tr>
      <td align="left" valign="top">
        <ul>
<code>project</code><br/>
<code>└─&nbsp;default-shallow-target.json</code><br/>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

------

## Strategies

### <a name="mock-plugin-strat-ref-default-shallow">default-shallow</a>  

:small_blue_diamond: `json`, `yml`

*Similar to `merge-shallow`, but keeps existing values instead of overwriting.*

Useful to ensure specific keys of the target are present without overwriting existing content.
