exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allImagesJson {
        edges {
          node {
              id
          }
        }
      }
    }
  `);
  data.allImagesJson.edges.forEach((edge) => {
    const imageId = edge.node.id;
    actions.createPage({
      path: `image/${imageId}`,
      component: require.resolve(`./src/templates/modal-image.js`),
      context: { imageId: imageId },
    });
  });
};
