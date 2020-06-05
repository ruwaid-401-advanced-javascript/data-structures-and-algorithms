'use strict';

const { Stack, Queue } = require('../stacksAndQueues/stacks-and-queues');


describe('Stacks and queues challenge', () => {
  it('stacks test ', () => {
    let testStack = new Stack();
    // Can successfully make and instance of a stack
    expect(testStack instanceof Stack).toBeTruthy();
    // Can successfully push onto a stack
    testStack.push('1');
    expect(testStack.top.value).toEqual('1');
    // Can successfully push multiple values onto a stack
    testStack.push('2');
    testStack.push('3');
    expect(testStack.top.value).toEqual('3');
    // Can successfully pop off the stack
    testStack.pop();
    expect(testStack.top.value).toEqual('2');
    // test peek()
    expect(testStack.peek()).toEqual('2');
    // Return a False boolean isEmpty 
    expect(testStack.isEmpty()).toBeFalsy();
    // Can successfully empty a stack after multiple pops 
    testStack.pop();
    testStack.pop();
    expect(testStack.top).toBeNull();
    // Calling pop or peek on empty stack raises exception
    expect(testStack.pop()).toBeNull();
    expect(testStack.peek()).toBeNull();
    // Return a True boolean isEmpty 
    expect(testStack.isEmpty()).toBeTruthy();
  });

  it('Queues test ', () => {
    let testQueue = new Queue();
    // Can successfully make and instance of a Queue
    expect(testQueue instanceof Queue).toBeTruthy();
    // Can successfully enqueue into a queue
    testQueue.enqueue('1');
    expect(testQueue.front.value).toEqual('1');
    // Can successfully enqueue multiple values into a queue
    testQueue.enqueue('2');
    testQueue.enqueue('3');
    expect(testQueue.front.value).toEqual('1');
    expect(testQueue.front.next.value).toEqual('2');
    // Can successfully dequeue out of a queue the expected value
    testQueue.dequeue();
    expect(testQueue.front.value).toEqual('2');
    // Can successfully peek into a queue, seeing the expected value
    expect(testQueue.peek()).toEqual('2');
    // Return a False boolean isEmpty 
    expect(testQueue.isEmpty()).toBeFalsy();
    // Can successfully empty a queue after multiple dequeues
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.front).toBeNull();
    // Calling dequeue or peek on empty queue raises exception
    expect(testQueue.peek()).toBeNull();
    expect(testQueue.dequeue()).toBeNull();
    // Return a True boolean isEmpty 
    expect(testQueue.isEmpty()).toBeTruthy();
  });

});