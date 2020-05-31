'use strict';

let Node = require('../linked-list/node.js');
let LinkedList = require('../linked-list/linked-list.js');


class Ll_insertion extends LinkedList {

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  insertBefore(value, newVal) {
    if (!this.head) return 'Exception';

    let node = new Node(newVal);
    let currentNode = this.head;
    
    if(currentNode.value === value) return this.insert(newVal);

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
      currentNode = currentNode.next;
    }
    return 'Exception';
  }

  insertAfter(value, newVal) {
    if (!this.head) return 'Exception';

    let node = new Node(newVal);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
      currentNode = currentNode.next;
    }
    return 'Exception';
  }
}

module.exports = Ll_insertion;
