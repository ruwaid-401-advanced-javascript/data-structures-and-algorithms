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
    let node = new Node(newVal);

    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);

    let currentNode = this.head;
    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next;

    node.next = currentNode.next;
    currentNode.next = node;
    return this;
  }


}




// let x = new ll_insertion();
// x.insert(1);
// x.insert(2);
// x.append(4);
// x.append(6);
// x.insert(9);
// console.log(x.toString());
// x.insertBefore(4, 10);
// console.log(x.toString());

// x.insertAfter(2, 88);
// x.insertAfter(88, 333);
// x.append(666);
// x.insert('a ');

// console.log(x.toString());

module.exports = Ll_insertion;
