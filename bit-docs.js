var postProcessTags = require("./post-process");
var processTags = require("./process-tags");

module.exports = function(bitDocs){
    // this makes tags run
    bitDocs.register("postProcessor", postProcessTags);
    bitDocs.register("processor", processTags);
};
