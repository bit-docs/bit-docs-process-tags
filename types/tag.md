@parent bit-docs-process-tags/types
@typedef {{}} bit-docs-process-tags/types/tag Tag

@description

[bit-docs-process-tags/types/tag]s add information to the new
[bit-docs/types/docObject] created by [bit-docs-process-tags/process-tags]
when processing a [bit-docs-process-tags/types/tagBlock].

@option {bit-docs-process-tags/types/tag.keepStack} keepStack Instance of
[bit-docs-process-tags/types/tag.keepStack].

@option {bit-docs-process-tags/types/tag.add} add Instance of
[bit-docs-process-tags/types/tag.add].

@option {bit-docs-process-tags/types/tag.addMore} addMore Instance of
[bit-docs-process-tags/types/tag.addMore].

@option {bit-docs-process-tags/types/tag.end} end Instance of
[bit-docs-process-tags/types/tag.end].

@body

## About Tags

[bit-docs-process-tags/types/tag]s are objects with callback functions,
properties, and state that the [bit-docs-process-tags] processor is specially
designed to handle.

The [bit-docs-process-tags/process-tags] processor allows
[bit-docs-process-tags/types/tag]s in a
[bit-docs-process-tags/types/tagCollection] to manipulate a
[bit-docs-process-tags/types/processTagsStack] using
[bit-docs-process-tags/types/processTagsCommand]s.

### Register a Tag

To register a [bit-docs-process-tags/types/tag], you need to add to register
on the `tags` hook (in your plugin `bit-docs.js`) an object naming your
[bit-docs-process-tags/types/tag] and setting it to an object containing at
least a [bit-docs-process-tags/types/tag.add] and an optional
[bit-docs-process-tags/types/tag.addMore] method:

    var tags = {
        "mytag": {
            addMore: function (line, last) { ... },
            add: function (line) { ... }
        }
    };

    for(var name in tags) {
        tags[name].name = name;
    }

    bitDocs.register("tags", tags);
