var tags = {
    "_default": require("./_default"),
	add: require("./add"),
	body: require("./body"),
	description: require("./description"),
	"hide": require("./hide"),
	"parent": require("./parent")
};

for(var name in tags) {
	tags[name].name = name;
}

module.exports = tags;
