@parent bit-docs-process-tags/types
@typedef {*<Array<String,(String|Object|bit-docs/types/docObject)>>} bit-docs-process-tags/types/processTagsCommand ProcessTagsCommand

@description Return type from [bit-docs-process-tags/types/tag.add] that is a
[bit-docs-process-tags/process-tags] command.

@option {Array<"push",Object>} push Push custom data onto
[bit-docs-process-tags/types/processTagsStack].

Example of __push__: `['push', customDataObject]`.

@option {Array<"pop",String>} pop Pop off
[bit-docs-process-tags/types/processTagsStack] and give `text` to previous
[bit-docs-process-tags/types/tag].

Example of __pop__: `['pop', text]`.

This command calls [bit-docs-process-tags/types/tag.addMore] of the previous
tag with `text`.

@option {Array<"poppop",String>} poppop Pops twice, giving `text` to the tag
before the previous [bit-docs-process-tags/types/tag].

Example of __poppop__: `['poppop', text]`.

Useful for a closing [bit-docs-process-tags/types/tag] to pop itself and an
opening [bit-docs-process-tags/types/tag] off the
[bit-docs-process-tags/types/processTagsStack].

For example, [bit-docs-js/tags/codeend.add] will return a
[bit-docs-process-tags/types/processTagsCommand] like:

```js
['poppop', '```javascript\nvar myString = "hello world";\n```']
```

@option {Array<"default",String>} default Set the [bit-docs/types/docObject]
property for appending processed output from normal lines.

Any normal line processed after the `@` declaration in a
[bit-docs-process-tags/types/tagBlock] will be appended to this property.

Example of __default__: `['default', propName]`.

Both [bit-docs-process-tags/tags/body] and
[bit-docs-process-tags/tags/description] expect multiple lines.

For example, [bit-docs-process-tags/tags/body.add] returns a
[bit-docs-process-tags/types/processTagsCommand] like:

```js
['default', 'body']
```

While [bit-docs-process-tags/tags/description.add] returns a
[bit-docs-process-tags/types/processTagsCommand] like:

```js
['default', 'description']
```

[bit-docs-process-tags/types/tag]s specify different
[bit-docs/types/docObject] properties (like `body` and `description`) to
store the HTML output from multiple lines.

@option {Array<"add",bit-docs/types/docObject>} add Add to [bit-docs/types/docMap].

Example of __add__: `['add', docObject]`.

Used by:
  - [bit-docs-js/tags/prototype.add]
  - [bit-docs-js/tags/static.add]

@option {(Array<"scope",bit-docs/types/docObject>|Array<"scope",bit-docs/types/docObject,bit-docs/types/docObject>)} scope

Change the scope.

Example of __scope__: `['scope', scopeDocObject]`.

Used by:
  - [bit-docs-js/tags/group.add]
  - [bit-docs-js/tags/module.add]
  - [bit-docs-js/tags/constructor.add]

Example of changing the scope and the [bit-docs/types/docObject] being added to:

`['scope', scopeDocObject, docObject]`.

Used by:
  - [bit-docs-js/tags/add.add]

@body

# Use

Use these commands to manipulate the
[bit-docs-process-tags/types/processTagsStack] as needed from your respective
[bit-docs-process-tags/types/tag.add].
