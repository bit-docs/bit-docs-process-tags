@parent bit-docs-process-tags/types/tag
@typedef {function(this:bit-docs/types/docObject)} bit-docs-process-tags/types/tag.end Tag.end

@description Called when moving on to the next [bit-docs-process-tags/types/tag].

@param {String} line Text from `@` until the end of line.
@param {bit-docs/types/docObject} curData Current [bit-docs/types/docObject].
@param {bit-docs/types/docObject} scope [bit-docs/types/docObject]
representing current scope.
@param {bit-docs/types/docMap} docMap [bit-docs/types/docMap] being added to.

@body

## Use

Use this to clean up anything before switching to a new
[bit-docs-process-tags/types/tag].

Does not get called if [bit-docs-process-tags/types/tag.keepStack] is `true`.
