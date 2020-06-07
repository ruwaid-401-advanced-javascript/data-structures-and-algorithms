'use strict';

const Node = require('../../data-Structures/linked-list/node');

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value) {
    return this.rear.push(value);
  }
  dequeue() {
    if (!this.rear.peek()) return 'Nothing';
    while (this.rear.peek()) {
      let value = this.rear.pop();
      this.front.push(value);
    }
    return this.front.pop();
  }
}


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    this.top ? node.next = this.top : null;
    return this.top = node;
  }

  pop() {
    let value = null;
    if (this.top) {
      value = this.top.value;
      this.top = this.top.next;
    }
    return value;
  }
  peek() {
    const topValue = this.top ? this.top.value : null;
    return topValue;
  }
}


module.exports = {PseudoQueue,Stack};
