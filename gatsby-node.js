const path = require(`path`);
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/postTemplate.js');
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allContentfulPost {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: postTemplate,
            context: {
              slug: edge.node.slug
            }
          });
        });
        // return;
      })
    );
  });
};

