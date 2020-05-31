'use strict';

let llKkthFromEnd = require('../data-Structures/ll-kth-from-end/ll-kth-from-end.js');


describe('Linked list challenge', () => {  
  it('k test ', () => {
    let list = new llKkthFromEnd();
    list.insert('test a');
    expect(list.kthFromEnd(0)).toEqual('test a');
    expect(list.kthFromEnd(1)).toEqual('Exception');
    expect(list.kthFromEnd(2)).toEqual('Exception');
    list.insert('test b');
    list.insert('test c');
    list.insert('test d');
    list.insert('test e');
    expect(list.kthFromEnd(-2)).toEqual('Exception');
    expect(list.kthFromEnd(1)).toEqual('test b');
    expect(list.kthFromEnd(2)).toEqual('test c');
    expect(list.kthFromEnd(3)).toEqual('test d');
  });
});
