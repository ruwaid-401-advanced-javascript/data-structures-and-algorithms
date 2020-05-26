'use strict';

let LinkedList = require('../challenges/linked-list/linked-list.js');


describe('Linked list challenge', () => {

  it('Instantiate an empty linked list ', () => {
    let list = new LinkedList();
    expect(list).toEqual({ head: null });
  });

  it('Insert into the linked list ', () => {
    let list = new LinkedList();
    expect(list.insert('test a')).toEqual({ head: { value: 'test a', next: null } });
  });

  it('head property properly point to the first node ', () => {
    let list = new LinkedList();
    list.insert('test b');
    expect(list.head).toEqual({ value: 'test b', next: null });
  });

  it('Can properly insert multiple nodes into the linked list ', () => {
    let list = new LinkedList();
    list.insert('test c');
    list.insert('test d');
    expect(list.head).toEqual({ value: 'test d', next: { value: 'test c', next: null } });
  });

  it('Will return true when finding a value within the linked list that exists ', () => {
    let list = new LinkedList();
    list.insert('test a');
    list.insert('test b');
    list.insert('test c');
    list.insert('test d');
    expect(list.includes('test a')).toEqual(true);
    expect(list.includes('test b')).toEqual(true);
    expect(list.includes('test c')).toEqual(true);
    expect(list.includes('test d')).toEqual(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist ', () => {
    let list = new LinkedList();
    list.insert('test a');
    list.insert('test b');
    list.insert('test c');
    list.insert('test d');
    expect(list.includes('test wrong')).toEqual(false);
    expect(list.includes('test x')).toEqual(false);
    expect(list.includes('test y')).toEqual(false);
    expect(list.includes('test z')).toEqual(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list ', () => {
    let list = new LinkedList();
    list.insert('test a');
    list.insert('test b');
    list.insert('test c');
    list.insert('test d');
    expect(list.toString()).toEqual('"{ test d } -> { test c } -> { test b } -> { test a } -> NULL "');
  });
});



