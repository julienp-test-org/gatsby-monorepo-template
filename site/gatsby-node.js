const slugify = require("slugify");

/**
 *
 * @param {Gatsby Node API} param0
 * Defining all Node APIs
 */
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // const node = {
  //   id: createNodeId("unique"),
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: "unique",
  //     content: JSON.stringify(nodeContent),
  //     contentDigest: createContentDigest(nodeContent),
  //   },
  // };
};

/**
 *
 * @param {Gatsby CreatePages API} param0
 * Creating Pages from a template
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  createPage({
    path: "/custom",
    component: require.resolve("./src/templates/custom.js"),
    context: {
      title: "Custom Page",
      pageContext: "This is a custom page.",
      // Data passed to context is available in page queries as GraphQL variables.
      // slug: node.frontmatter.path,
    },
  });
};
