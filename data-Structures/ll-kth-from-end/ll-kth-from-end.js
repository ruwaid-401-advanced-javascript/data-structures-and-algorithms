'use strict';


let LinkedList = require('../linked-list/linked-list.js');

class llKkthFromEnd extends LinkedList {
  kthFromEnd(k) {
    let currentNode = this.head;
    let length = 0;
    let pos = 0;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    pos = length - k - 1;

    if (pos < 0 || k < 0) return 'Exception';

    currentNode = this.head;
    while (pos) {
      currentNode = currentNode.next;
      pos--;
    }
    return currentNode.value;
  }
}

module.exports = llKkthFromEnd;