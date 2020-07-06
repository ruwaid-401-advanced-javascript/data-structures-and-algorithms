'use strict';

const BinaryTree = require('../challenges/tree/tree');
const Node = require('../challenges/tree/treeNode');

const tree_intersection = require('../challenges/tree/tree_intersection/tree_intersection');

describe('tree_intersection  tests', () => {

  let tree1 = null;

  beforeAll(() => {
    let one = new Node(12);
    let two = new Node(9);
    let three = new Node(16);
    let four = new Node(14);
    let five = new Node(17);
    let six = new Node(4);
    let seven = new Node(6);
    let eight = new Node(5);
    let nine = new Node(7);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree1 = new BinaryTree(one);
  });


  let tree2 = null;

  beforeAll(() => {
    let one = new Node(5);
    let two = new Node(9);
    let three = new Node(16);
    let four = new Node(33);
    let five = new Node(17);
    let six = new Node(4);
    let seven = new Node(156);
    let eight = new Node(5);
    let nine = new Node(7);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree2 = new BinaryTree(one);
  });


  it('tree_intersection test ', () => {
    let expected = [9, 4, 5, 7,16, 17];
    expect(tree_intersection(tree1, tree2)).toEqual(expected);
  });
});
