module.exports = config => {
	config.addFilter("removeTLD", tld => tld.split('.').splice(0,1) )
	config.addPassthroughCopy({ "static" : "/" })
	return {
		dir: {
			input: "11ty",
			includes: "_components",
		},
		htmlTemplateEngine: "njk",
	};
};
