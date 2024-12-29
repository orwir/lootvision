exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const createGameVersion = (version, name) => {
    const content = { version: version, name: name };
    const node = {
      id: createNodeId(`game-${version}`),
      parent: null,
      children: [],
      internal: {
        type: 'Game',
        mediaType: 'application/json',
        content: JSON.stringify(content),
        contentDigest: createContentDigest(content),
      },
      ...content,
    };

    createNode(node);
  };

  createGameVersion('poe1', 'Path of Exile 1');
  createGameVersion('poe2', 'Path of Exile 2');
};
