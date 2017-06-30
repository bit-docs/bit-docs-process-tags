/**
 * @parent bit-docs-process-tags/tags
 * @module {bit-docs-js/tag} bit-docs-process-tags/tags/parent @parent
 * 
 * Specifies the parent [bit-docs/types/docObject]'s name. The current
 * docObject will be displayed under the the parent in the navigation.
 * 
 * @signature `@parent NAME`
 * 
 * @codestart javascript
 * /**
 *  * @constructor jQuery.Drag
 *  * @parent specialevents
 *  * ...
 *  *|
 *  $.Drag = function(){}
 * @codeend
 * 
 * @param {String} NAME The name of the parent [bit-docs/types/docObject].
 * 
 * @body
 * 
 * ## Use
 * 
 * [bit-docs-js/tags/function] and [bit-docs-js/tags/property] tags can infer
 * their parent from the current scope.
 */
module.exports = (function() {
	var waiting = {}

	return {
		add: function( line , curData, objects) {
			var m = line.match(/^\s*@parent\s*([\w\-\.\/\$]*)\s*([\d]*)/);
			this.parent = m[1];
			if(m[2]){
				this.order =  parseInt(m[2]) || 0;
			}
		}
	};

})();
