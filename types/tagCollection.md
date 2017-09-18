@parent bit-docs-process-tags/types
@typedef {Object<String,bit-docs-process-tags/types/tag>} bit-docs-process-tags/types/tagCollection TagCollection

@description A collection of tags.

@body

## Use

Will look like:

```js
{
    author: {
        add: [Function: add],
        name: 'author'
    },
    demo: {
        add: [Function: add]
	},
	// ...more tags added by plugins
    body: {
        add: [Function: add],
        done: [Function: done],
        name: 'body'
    },
    description: {
        add: [Function: add],
        name: 'description'
    },
    hide: {
        add: [Function: add],
        name: 'hide'
    },
    parent: {
        add: [Function: add],
        name: 'parent'
    }
}
```
