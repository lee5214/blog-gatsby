/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

	// You can delete this file if you're not using it

const path = require ('path');

exports.createPages = ({boundActionCreators, graphql}) => {
	const {createPage} = boundActionCreators;
	const postTemplate = path.resolve ('src/templates/postTemplate.js');
	// return new Promise ((resolve, reject) => {
	// 	resolve (
	// 		graphql (`{
	// 			allContentfulPost {
	// 				edges{
	// 					node{
	// 						id
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}`).then ((res) => {
	// 			if (res.errors) {
	// 				reject (res.errors);
	// 				//return Promise.reject (res.errors);
	// 			}
	// 			res.data.allContentfulPost.edges.forEach (({node}) => {
	// 				createPage ({
	// 					path : node.slug,//node.frontmatter.path,
	// 					component : postTemplate,
	// 				});
	// 			});
	// 		}),
	// 	);
	// });
	return new Promise ((resolve, reject) => {
		resolve (
			graphql (`{
				allMarkdownRemark {
					edges{
						node{
							html
							id
							frontmatter {
								path
							}
						}
					}
				}
			}`).then ((res) => {
				if (res.errors) {
					reject (res.errors);
					//return Promise.reject (res.errors);
				}
				res.data.allMarkdownRemark.edges.forEach (({node}) => {
					createPage ({
						path : node.frontmatter.path,
						component : postTemplate,
					});
				});
			}),
		);
	});
};

