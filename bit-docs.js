var postProcessTags = require("./post-process");
var processTags = require("./process-tags");
var _ = require("lodash");
module.exports = function(bitDocs){
    // this makes tags run
    bitDocs.register("postProcessor", postProcessTags);
    bitDocs.register("processor", processTags);
    bitDocs.handle("tags", function(siteConfig, tags){
        siteConfig.tags = _.assign(siteConfig.tags || {}, tags);
    });
};
