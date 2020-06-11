'use strict';
const Node = require('../tree/treeNode');


class BinarySearchTree {
  constructor(tree) {
    this.tree = tree;
  }

  add(value) {
    let _addNode = (node) => {

      if (!node)  return new Node(value);
      if (value < node.value) {
        node.left = _addNode(node.left);
        return node;
      }
      if (value >= node.value) {
        node.right = _addNode(node.right);
        return node;
      }
    };
    _addNode(this.tree.root);
    return 'Done Adding';
  }

  contains(value) {
    let _containValue = (node) => {
      if (!node) return false;
      if (value === node.value) return true;
      if (value < node.value) return _containValue(node.left);
      if (value > node.value) return _containValue(node.right);
    };
    return _containValue(this.tree.root);
  }
}

module.exports = BinarySearchTree;