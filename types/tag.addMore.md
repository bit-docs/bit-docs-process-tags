@parent bit-docs-process-tags/types/tag
@typedef {function(this:bit-docs/types/docObject)} bit-docs-process-tags/types/tag.addMore Tag.addMore

@description Called for every line after a [bit-docs-process-tags/types/tag] if
[bit-docs-process-tags/types/tag.add] returns an object.

@param {String} line String of characters until newline.
@param {Object} curData Custom object.
@param {bit-docs/types/docObject} scope [bit-docs/types/docObject]
representing current scope.
@param {bit-docs/types/docMap} docMap [bit-docs/types/docMap] being added to.

@body

## Use

For example, [bit-docs-js/tags/codestart.addMore] pushes to the custom data
object returned from [bit-docs-js/tags/codestart.add]:

```js
addMore: function( line, data ) {
  data.lines.push(line);
},
```
