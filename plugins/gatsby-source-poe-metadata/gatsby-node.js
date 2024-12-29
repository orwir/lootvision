const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const { slash } = require(`gatsby-core-utils`);

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  options
) => {
  const { createNode } = actions;

  const getAllFiles = (dir, result = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const absolutePath = slash(path.join(dir, file));
      if (fs.statSync(absolutePath).isDirectory()) {
        result = getAllFiles(absolutePath, result);
      } else {
        result.push(absolutePath);
      }
    });
    return result;
  };

  const files = getAllFiles(options.path);
  files.forEach((file) => {
    const raw = fs.readFileSync(file, 'utf-8');
    const content = yaml.parse(raw);

    const node = {
      id: createNodeId(`poe-metadata-${file}`),
      parent: null,
      children: [],
      internal: {
        type: 'PoeMetadata',
        mediaType: 'application/x-yaml',
        content: JSON.stringify(raw),
        contentDigest: createContentDigest(content),
      },
      ...content,
    };

    createNode(node);
  });
};
