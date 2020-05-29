'use strict';

const Node = require('./node');

class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {

    let node = new Node(value);

    if (!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  includes(value) {
    let currentNode = this.head;
    if (value === currentNode.value) return true;

    while (currentNode.next) {
      currentNode = currentNode.next;
      if (value === currentNode.value) return true;
    }
    return false;
  }

  toString() {
    let str = '"';
    let currentNode = this.head;

    str += `{ ${currentNode.value} }`;

    while (currentNode.next) {
      currentNode = currentNode.next;
      str += ` -> { ${currentNode.value} }`;
    }

    str += ' -> NULL "';
    return str;
  }
}

module.exports = LinkedList;
