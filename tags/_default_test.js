var processTags = require("../process-tags"),
	_default = require("./_default"),
	assert = require("assert");




describe("bit-docs-process-tags/tags/_default", function(){

	it("basic",function(){

		var docMap = {Foo: {name: "Foo",type: "constructor"}};

		processTags({
			comment: "@foo bar",
			docMap: docMap,
			docObject: {},
			tags: {_default: _default}
		}, function(newDoc, newScope){
			assert.equal(newDoc.foo, "bar");
		});
	});

	it("works with commas",function(){

		var docMap = {Foo: {name: "Foo",type: "constructor"}};

		processTags({
			comment: "@foo bar, zed",
			docMap: docMap,
			docObject: {},
			tags: {_default: _default}
		}, function(newDoc, newScope){
			assert.deepEqual(newDoc.foo, ["bar","zed"]);
		});
	});



});
