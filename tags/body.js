var startHTMLComment = /\s*<!--/;
var endHTMLComment = /\s*-->/;

/**
 * @parent bit-docs-process-tags/tags
 * @module {bit-docs-js/tag} bit-docs-process-tags/tags/body @body
 * 
 * @description 
 * 
 * Markdown content placed after all signature and API content.
 * 
 * @signature `@body`
 * 
 * Content after the `@body` tag appears after the title, description,
 * signature and API content.
 * 
 * `@body` tag content is treated as markdown and set as the
 * [bit-docs/types/docObject docObject]'s `body` property.
 * 
 * @body
 * 
 * ## Use
 * 
 * The body of a [bit-docs/types/docObject docObject] is displayed at the
 * bottom of an html page generated with the
 * [bit-docs-generate-html default html generator].
 * 
 * In the following example, `@body` stops content from being added to
 * [bit-docs-js/tags/param], and instead makes content be added to the body
 * property.
 * 
 * @codestart javascript
 * /**
 *  * A component for lib.
 *  * 
 *  * @param {String} name The name of the
 *  * component.
 *  * 
 *  * @body
 *  * 
 *  * ## Use
 *  * 
 *  * ```
 *  * new lib.Component("name")
 *  * ```
 *  *|
 * lib.Component = function(name){}
 * @codeend
 * 
 * By default the first paragraph of content that is not after a multi-line tag
 * like [bit-docs-js/tags/signature], [bit-docs-js/tags/param], etc, is set as
 * the [bit-docs-process-tags/tags/description]. All content after the first
 * paragraph is set as the body content.
 * 
 * You can see what is treated as description and body by default in the
 * following example:
 * 
 * @codestart javascript
 * /**
 *  * @function 
 *  * 
 *  * DESCRIPTION DESCRIPTION
 *  * DESCRIPTION DESCRIPTION
 *  * 
 *  * BODY BODY
 *  * BODY BODY
 *  * 
 *  * BODY BODY
 *  * 
 *  * @signature `.cols(cols)` SIGNATURE_DESCRIPTION
 *  * SIGNATURE_DESCRIPTION SIGNATURE_DESCRIPTION
 *  *
 *  * @body
 *  * BODY BODY
 *  *|
 * Graph.prototype.cols = function(cols){ ... }
 * @codeend
 */
module.exports= {
	add: function( line ) {
		
		var m = line.match(/^\s*@body\s*(.*)/);
		if ( m ) {
			this.comment = m[1]+" ";
			
		}
		return ["default","body"];
	},
	done: function(){
		if(this.body){
			// clean up <!-- comments around params
			if( startHTMLComment.test(this.description) && endHTMLComment.test(this.body) ) {
				this.description = this.description.replace(startHTMLComment,"");
				this.body = this.body.replace(endHTMLComment,"");
			}
		}
	}
};
