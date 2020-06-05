'use strict';

const Node = require('../data-Structures/linked-list/node');

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
    this.top ? this.top = this.top.next : null;
    return this.top;
  }
  peek() {
    const topValue = this.top ? this.top.value : null;
    return topValue;
  }
  isEmpty() {
    return (!this.top);
  }
}





class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      //  front and rear refer to the same address
      this.front = node;
      this.rear = node;
    } else {
      // add second element --> rear.next refere to the same front.next
      // add third element --> rear.next refere to the same next inside the next of front.next
      this.rear.next = node;
      this.rear = node;
    }
    return this.front.value;
  }

  dequeue() {
    this.front ? this.front = this.front.next : null;
    return this.front;
  }
  peek() {
    const frontValue = this.front ? this.front.value : null;
    return frontValue;
  }
  isEmpty() {
    return (!this.front);
  }

}




module.exports = { Stack, Queue };