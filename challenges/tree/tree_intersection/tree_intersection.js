'use strict';

function tree_intersection(tree1, tree2) {
  let results = [];

  const _preOrder = (tree) => {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(tree.root);
    return result;
  };

  let tree1Arr = _preOrder(tree1);
  let tree2Arr = _preOrder(tree2);

  tree1Arr.forEach(val => tree2Arr.includes(val) ? results.push(val) : null);
  return results;
}

module.exports = tree_intersection;