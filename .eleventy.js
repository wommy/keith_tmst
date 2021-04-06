module.exports = config => {
	config.addPassthroughCopy({ "static" : "/" })
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
