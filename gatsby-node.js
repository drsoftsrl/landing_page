// replace scriptjs module with a dummy module during server rendering
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /scriptjs/,
						use: loaders.null(),
					},
				],
			},
		})
	}
};