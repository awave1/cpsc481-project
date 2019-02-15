const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const DeliverableTemplate = path.resolve(
    'src/templates/DeliverableTemplate.js'
  );

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const { node } = post;
      const { slug } = node.fields;

      createPage({
        path: slug,
        component: DeliverableTemplate,
        context: { slug },
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'src/content' });

    createNodeField({
      node,
      name: 'slug',
      value: slug.replace(/\/$/, ''),
    });
  }
};
