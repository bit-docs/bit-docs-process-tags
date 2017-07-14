var postProcessTags = require("./post-process");
var processTags = require("./process-tags");
var _ = require("lodash");

/**
 * @parent plugins
 * @module {function} bit-docs-process-tags
 * @group bit-docs-process-tags/tags tags
 * @group bit-docs-process-tags/modules modules
 *
 * @description Processes tags for a docMap.
 *
 * @body
 *
 * This plugin registers onto these hooks:
 *   - `processor`
 *   - `postProcessor`
 * 
 * This plugin handles the `tags` hook, and in doing so also adds some tags:
 *   - [bit-docs-process-tags/tags/add @add]
 *   - [bit-docs-process-tags/tags/body @body]
 *   - [bit-docs-process-tags/tags/description @description]
 *   - [bit-docs-process-tags/tags/hide @hide]
 *   - [bit-docs-process-tags/tags/parent @parent]
 * 
 * Registering the `processor` hook adds a general processor that processes a
 * code comments and produces a [bit-docs/types/docObject] from the tags found.
 *
 * Registering the `postProcessor` hook adds a special processor that calls the
 * `done` method of any tags that have such a method, passing the
 * [bit-docs/types/docObject].
 */
module.exports = function(bitDocs){
    // this makes tags run
    bitDocs.register("postProcessor", postProcessTags);
    bitDocs.register("processor", processTags);
    bitDocs.handle("tags", function(siteConfig, tags){
        siteConfig.tags = _.assign(siteConfig.tags || {}, tags);
    });
};
