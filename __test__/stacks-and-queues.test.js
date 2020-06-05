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

  
});