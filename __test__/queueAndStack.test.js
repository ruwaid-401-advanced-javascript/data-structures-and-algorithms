
const {PseudoQueue,Stack} = require('../challenges/queueWithStacks/queue-with-stacks');



describe('Queues using Stacks challenge', () => {
  it('Queues test ', () => {
    let testQueue = new PseudoQueue();
    // Can successfully make and instance of a Queue
    expect(testQueue instanceof PseudoQueue).toBeTruthy();
    // Can successfully enqueue multiple values into a queue
    testQueue.enqueue('1');
    testQueue.enqueue('2');
    testQueue.enqueue('3');
    expect(testQueue.rear.top.value).toEqual('3');
    // Can successfully empty a queue after multiple dequeues
    testQueue.dequeue();
    testQueue.dequeue();
    // Calling dequeue or peek on empty queue raises exception
    expect(testQueue.dequeue()).toEqual('Nothing');
  });


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
    // Can successfully empty a stack after multiple pops 
    testStack.pop();
    testStack.pop();
    expect(testStack.top).toBeNull();
    // Calling pop or peek on empty stack raises exception
    expect(testStack.pop()).toBeNull();
    expect(testStack.peek()).toBeNull();
  });
});