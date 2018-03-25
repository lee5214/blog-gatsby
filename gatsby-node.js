const path = require (`path`);

exports.createPages = ({boundActionCreators, graphql}) => {
	const {createPage} = boundActionCreators;
	return new Promise ((resolve, reject) => {
		const postTemplate = path.resolve ('src/templates/postTemplate.js');
		resolve (
			graphql (`{
					allContentfulPost{
						edges{
							node{
								id
					            slug
							}
						}
					}
				}`,
			).then ((result) => {
				if (result.errors) {
					console.log (result.errors);
					reject (result.errors);
				}
				result.data.allContentfulPost.edges.forEach ((edge) => {
					createPage ({
						path : edge.node.slug,//node.slug,//node.frontmatter.path,
						component : postTemplate,
						context : {
							slug : edge.node.slug,
						},
					});
				});
				return;
			}),
		);
	});
};
