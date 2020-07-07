'use strict';

const Hashmap = require('../challenges/hashtable/hashtable');
const join = require('../challenges/left_join/left_join');

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



  it('join()', () => {

    let testHash = new Hashmap(1024);
    let testHash2 = new Hashmap(1024);

    testHash.add('testKey', 'Test Value');
    testHash.add('testKey2', 'Test Value');
    testHash2.add('testKey', 'Test Value2');
    testHash2.add('testKey2', 'Test Value222');

    testHash.add('testKey3', 'first Test Value');
    testHash.add('testKey3', 'first Test Value');
    testHash2.add('testKey3', 'second Test Value');
    testHash.add('Car', 'Tesla');
    let expected = [
      ['testKey2', 'Test Value', 'Test Value222'],
      ['Car', 'Tesla', null],
      ['testKey3', 'first Test Value', 'second Test Value'],
      ['testKey3', 'first Test Value', 'second Test Value'],
      ['testKey', 'Test Value', 'Test Value2'],
    ];
    expect(join(testHash, testHash2, 'left')).toEqual(expected);
  });

  it('join()', () => {

    let testHash = new Hashmap(1024);
    let testHash2 = new Hashmap(1024);

    testHash.add('testKey', 'Test Value');
    testHash.add('testKey2', 'Test Value');
    testHash2.add('testKey', 'Test Value2');
    testHash2.add('testKey2', 'Test Value222');

    testHash.add('testKey3', 'first Test Value');
    testHash.add('testKey3', 'first Test Value');
    testHash2.add('testKey3', 'second Test Value');
    testHash.add('Car', 'Tesla');
    let expected = [['testKey2', 'Test Value222', 'Test Value'],
      ['testKey3', 'second Test Value', 'first Test Value'],
      ['testKey', 'Test Value2', 'Test Value'],
    ];
    expect(join(testHash, testHash2, 'right')).toEqual(expected);
  });



  it('join()', () => {

    let testHash = new Hashmap(1024);
    let testHash2 = new Hashmap(1024);

    testHash.add('testKey', 'Test Value');
    testHash.add('testKey2', 'Test Value');
    testHash2.add('testKey', 'Test Value2');
    testHash2.add('testKey2', 'Test Value222');

    testHash.add('testKey3', 'first Test Value');
    testHash.add('testKey3', 'first Test Value');
    testHash2.add('testKey3', 'second Test Value');
    testHash.add('testKey3', 'third Test Value');
    testHash2.add('testKey3', 'third Test Value333');
    testHash.add('Car', 'Tesla');
    let expected = [
      ['testKey2', 'Test Value', 'Test Value222'],
      ['Car', 'Tesla', null],
      ['testKey3', 'first Test Value', 'second Test Value'],
      ['testKey3', 'first Test Value', 'second Test Value'],
      ['testKey', 'Test Value', 'Test Value2'],
    ];
    expect(join(testHash, testHash2, 'left')).toEqual(expected);
  });
});