'use strict';

const Node = require('../../data-Structures/linked-list/node');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    return this.front.value;
  }

  dequeue(pref) {
    // if(!pref) return  this.rear = this.rear.next ;
    if (!this.front) return null;
    // if(pref !== 'dog' && pref !== 'cat') return null;
    // console.log('oooooo',this.front);
    let current = this.front;
    console.log(current.value);

    while (current.next) {
      if (pref === 'zz' && current.value === 'dog') {
        this.front = this.front.next;
        current.value = 'yyyyyyy';
        console.log('hi ----------->', this.front);
        break;
      }
      current = current.next;
      console.log('current --->>', current);
    }

  }
}

let x = new AnimalShelter();
// console.log(x);
x.enqueue('dog');
// console.log(x);
x.enqueue('cat');
x.enqueue('cat');
x.enqueue('dog');
x.enqueue('cat');

console.log(x);

x.dequeue('cat');
console.log(x);

x.dequeue('zz');
console.log(x);
console.log(x.front.next);
console.log(x.front.next.next);

module.exports = AnimalShelter;