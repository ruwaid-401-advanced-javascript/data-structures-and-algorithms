'use strict';

let mergeLists = require('../challenges/llMerge/llMerge.js');


describe('Linked list merge challenge', () => {
  it('merge test two equall lists', () => {
    let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: { value: 'test1 after head2', next: { value: 'test1 after head3', next: null } } } } };
    let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };

    let expected = {
      head: {
        value: 'test 1',
        next: {
          value: 'test 2',
          next: {
            value: 'test1 after head',
            next: {
              value: 'test2 after head',
              next: {
                value: 'test1 after head2',
                next: {
                  value: 'test2 after head2',
                  next: {
                    value: 'test1 after head3',
                    next: { value: 'test2 after head3', next: null },
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(mergeLists(list1, list2)).toEqual(expected);
  });

  it('merge test seconde list shorter ', () => {
    let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: { value: 'test1 after head2', next: { value: 'test1 after head3', next: null } } } } };
    let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: null } } };

    let expected = {
      head: {
        value: 'test 1',
        next: {
          value: 'test 2',
          next: {
            value: 'test1 after head',
            next: {
              value: 'test2 after head',
              next: {
                value: 'test1 after head2',
                next: {
                  value: 'test1 after head3',
                  next: null,
                },
              },
            },
          },
        },
      },
    };

    expect(mergeLists(list1, list2)).toEqual(expected);
  });

  it('merge test seconde list shorter ', () => {
    let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: { value: 'test1 after head2', next: { value: 'test1 after head3', next: null } } } } };
    let list2 = { head: { value: 'test 2', next: null } };

    let expected = {
      head: {
        value: 'test 1',
        next: {
          value: 'test 2',
          next: {
            value: 'test1 after head',
            next: {
              value: 'test1 after head2',
              next: {
                value: 'test1 after head3',
                next: null,
              },
            },
          },
        },
      },
    };

    expect(mergeLists(list1, list2)).toEqual(expected);
  });

  it('merge test first list shorter ', () => {
    let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: null } } };
    let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };

    let expected = {
      head: {
        value: 'test 1',
        next: {
          value: 'test 2',
          next: {
            value: 'test1 after head',
            next: {
              value: 'test2 after head',
              next: {
                value: 'test2 after head2',
                next: { value: 'test2 after head3', next: null },
              },
            },
          },
        },
      },
    };

    expect(mergeLists(list1, list2)).toEqual(expected);
  });

  it('merge test with an empty list  ', () => {
    let list1 = { head: {} };
    let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };

    let expected =
    {
      value: 'test 2',
      next: {
        value: 'test2 after head',
        next: {
          value: 'test2 after head2',
          next: {
            value: 'test2 after head3',
            next: null,
          },
        },
      },
    };
    expect(mergeLists(list1, list2)).toEqual(expected);


    list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: { value: 'test1 after head2', next: { value: 'test1 after head3', next: null } } } } };
    list2 = { head: {} };

    expected =
    {
      value: 'test 1',
      next: {
        value: 'test1 after head',
        next: {
          value: 'test1 after head2',
          next: {
            value: 'test1 after head3',
            next: null,
          },
        },
      },
    };
    expect(mergeLists(list1, list2)).toEqual(expected);

  });

  it('merge test first list shorter ', () => {
    let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: null } } };
    let list2 = { head: { value: 'test 2', next: null } };

    let expected = {
      head: {
        value: 'test 1',
        next: {
          value: 'test 2',
          next: {
            value: 'test1 after head',
            next: null,
          },
        },
      },
    };

    expect(mergeLists(list1, list2)).toEqual(expected);
  });

});
