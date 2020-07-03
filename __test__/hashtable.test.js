'use strict';

const Hashmap = require('../challenges/hashtable/hashtable');


describe('hashtable challenge', () => {
  it('hash()', () => {
    let testHash = new Hashmap(1024);
    expect(testHash.hash('Car')).toBeTruthy();
  });

  it('add()', () => {
    let testHash = new Hashmap(1024);
    testHash.add('testKey', 'Test Value');
    testHash.add('testKey2', 'Test Value');
    testHash.add('testKey3', 'first Test Value');
    testHash.add('testKey3', 'second Test Value');
    testHash.add('testKey3', 'third Test Value');
    expect(testHash.add('Car', 'Tesla')).toBeTruthy();
  });

  it('get()', () => {
    let testHash = new Hashmap(1024);
    testHash.add('Car', 'Tesla');
    testHash.add('testKey', 'Test Value');
    expect(testHash.get('Car')).toEqual('Tesla');
    expect(testHash.get('testKey')).not.toEqual('Tesla');
  });

  it('contain()', () => {
    let testHash = new Hashmap(1024);
    testHash.add('Car', 'Tesla');
    testHash.add('testKey', 'Test Value');
    expect(testHash.contains('Car')).toBeTruthy();
    expect(testHash.get('nothere')).toBeFalsy();
  });

});