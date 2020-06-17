'use strict';

const Tree = require('../tree');


class SumOddTree extends Tree {

  SumOddTree() {
    let sum = 0;

    let _walk = (node) => {
      // 1. read TreeNode
      if (node.value % 2 !== 0) sum += node.value;
      // 2. go Left
      if (node.left) _walk(node.left);
      // 3. go Right
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return sum;
  }
}


module.exports = SumOddTree;