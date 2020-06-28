'use strict';

const Tree = require('../tree');


class MaximumTree extends Tree {

  MaximumTree() {
    let max = 0;

    let _walk = (node) => {
      // 1. read TreeNode
      if (max < node.value) max = node.value;
      // 2. go Left
      if (node.left) _walk(node.left);
      // 3. go Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return max;
  }
}


module.exports = MaximumTree;