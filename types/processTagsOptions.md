@parent bit-docs-process-tags/types
@typedef {{}} bit-docs-process-tags/types/processTagsOptions ProcessTagsOptions

Parameter type expected by [bit-docs-process-tags/process-tags].

@option {bit-docs-process-tags/types/tagCollection} tags 

The [bit-docs-process-tags/types/tagCollection] to draw from when processing the
[bit-docs-process-tags/types/tagBlock].

@option {bit-docs-process-tags/types/tagBlock} block

The [bit-docs-process-tags/types/tagBlock] to be processed.

@option {bit-docs/types/docObject} scope 

A [bit-docs/types/docObject] that can be a parent to the current
[bit-docs/types/docObject].

@option {bit-docs/types/docMap} docMap 

The map of all [bit-docs/types/docObject]s.

@option {bit-docs/types/docObject} [docObject]

If provided, this will be used as the [bit-docs/types/docObject].

This is useful for adding properties to an existing object.

@body

## Use

Used here:
- [bit-docs-process-tags/process-tags]
- [bit-docs-js/types/processCodeOptions]
