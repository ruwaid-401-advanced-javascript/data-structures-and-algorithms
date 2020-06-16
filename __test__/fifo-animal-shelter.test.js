'use strict';

const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');


describe('Animal shelter challenge', () => {
  it('Shelter test ', () => {
    let testShelter = new AnimalShelter();
    // Can successfully make and instance of a AnimalShelter
    expect(testShelter instanceof AnimalShelter).toBeTruthy();
    // Can successfully enqueue into  AnimalShelter
    testShelter.enqueue('dog');
    expect(testShelter.front.value).toEqual('dog');
    // Can successfully enqueue multiple values into a AnimalShelter
    testShelter.enqueue('cat');
    testShelter.enqueue('dog');
    expect(testShelter.front.value).toEqual('dog');
    expect(testShelter.front.next.value).toEqual('cat');
    // Can successfully dequeue out of a AnimalShelter the expected value
    testShelter.dequeue('cat');
    expect(testShelter.front.value).toEqual('dog');
    // Can successfully dequeue out of a AnimalShelter the expected value
    testShelter.dequeue();
    expect(testShelter.front.value).toEqual('dog');
    // Can successfully return null when dequeue out of a AnimalShelter other animal type
    expect(testShelter.dequeue('bird')).toBeNull();
    // Can successfully empty a AnimalShelter after multiple dequeues
    testShelter.dequeue();
    expect(testShelter.front).toBeNull();
    // Calling dequeue on empty AnimalShelter raises exception
    expect(testShelter.dequeue()).toEqual('empty');
    // Can successfully dequeue the front value out of a AnimalShelter 
    testShelter.enqueue('dog');
    testShelter.enqueue('cat');
    expect(testShelter.dequeue('dog')).toEqual('dog');
    expect(testShelter.front.value).toEqual('cat');
    // Calling dequeue on empty AnimalShelter raises exception
    expect(testShelter.dequeue('dog')).toEqual('not found');
    expect(testShelter.dequeue('cat')).toEqual('cat');
    // Calling dequeue on  AnimalShelter that have a many animals
    testShelter.enqueue('dog');
    testShelter.enqueue('dog');
    testShelter.enqueue('cat');
    expect(testShelter.dequeue('cat')).toEqual('cat');
  });

});