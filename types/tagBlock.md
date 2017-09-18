@parent bit-docs-process-tags/types
@typedef {Array<String>} bit-docs-process-tags/types/tagBlock TagBlock

@description

Array of lines that represent individual [bit-docs-process-tags/types/tag]s.

@body

## About TagBlock

A [bit-docs-process-tags/types/tagBlock] comes from a text block made up of
[bit-docs-process-tags/types/tag]s, typically from a
[bit-docs/types/fileSource]:

```js
@@tag1 ...
@@tag2 ...
...
...
@@tag3 ...
```

A text block like this is converted into a
[bit-docs-process-tags/types/tagBlock] by
[bit-docs-process-tags/process-tags]:

```js
[
  '@tag1 ...',
  '@tag2 ...',
  '...',
  '...',
  '@tag3 ...'
]
```

## Use

Parameter type for [bit-docs-process-tags/types/processTagsOptions].

[bit-docs-process-tags/process-tags] processes a
[bit-docs-process-tags/types/tagBlock] and finds lines that start with `@`.

[bit-docs-process-tags/types/tagBlock] will come from the entire
[bit-docs/types/fileSource] for `.md` files that can have various
[bit-docs-process-tags/types/tag]s mixed in with Markdown.
