exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = require.resolve("./src/components/template/article.jsx");
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            type: { in: ["blogpost", "resource", "project", "idea"] }
          }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query.: ${JSON.stringify(result.errors)}`
    );
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
