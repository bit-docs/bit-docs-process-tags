require("./tags/_default_test");

var assert = require("assert"),
	fs = require("fs"),
	path = require("path"),
    processTags = require("./process-tags");


var propertyTag = {
    add: function(line, curData, scope, docMap){
        this.name = "tags";
        this.type = "property";
    },
    parentTypes: ["constructor"],
    useName: true
};

describe("bit-docs-process-tags", function(){

	it("change scope", function(){
		var tags = {
			constructor: {
				add : function(){
					this.name = "constructed";
					this.type = "constructor";
					return ["scope",this];
				}
			},
			parent: {
				add: function(){
					this.parent = "parented"
				}
			}
		};

		var docMap = {Foo: {name: "Foo",type: "constructor"}},
			props = {};

		processTags({
			content:   ["@constructor",
						"@parent tang"],
			scope: docMap.Foo,
			docMap: docMap,
			docObject: props,
			tags: tags
		},function(newDoc, newScope){
			assert.equal(newDoc, newScope, "new doc item is new scope");
			assert.equal(newDoc, props, "props is the new doc object");

			assert.deepEqual(newDoc,{
				name: "constructed",
				type: "constructor",
				parent: "parented",
				body: "",
				description: ""
			});
		});

	});

	var example = {
		add: function(line){
			return {
				lines: []
			};
		},
		addMore: function(line, curData) {
			curData.lines.push(line);
		},
		end: function( curData ){
			this.body += "```\n"+curData.lines.join("\n")+"\n```\n";
		}
	};

	it("is able to end a current tag", function(){

		var docMap = {Foo: {name: "Foo",type: "constructor"}};

		processTags({
			comment: [
				"@property tags",
				"description",
				"",
				"body",
				"@example",
				"_.extend()",
				"@example",
				"_.clone()",
				"@body",
				"endbody"
			].join("\n"),
			scope: docMap.Foo,
			docMap: docMap,
			docObject: {},
			tags: {
				property: propertyTag,
				example: example,
				body: {
					add: function( line ) {
						return ["default","body"];
					}
				}
			}
		},function(newDoc, newScope){
			assert.equal(newDoc.body, '\nbody\n```\n_.extend()\n```\n```\n_.clone()\n```\nendbody\n');
		});

	});

	it("ends a current tag that is the last tag",function(){
		var docMap = {Foo: {name: "Foo",type: "constructor"}};

		processTags({
			comment: [
				"@property tags",
				"description",
				"",
				"body",
				"@example",
				"_.extend()",
			].join("\n"),
			scope: docMap.Foo,
			docMap: docMap,
			docObject: {},
			tags: {
				property: propertyTag,
				example: example,
				body: {
					add: function( line ) {
						return ["default","body"];
					}
				}
			}
		},function(newDoc, newScope){
			assert.equal(newDoc.body, '\nbody\n```\n_.extend()\n```\n');
		});
	});

});
