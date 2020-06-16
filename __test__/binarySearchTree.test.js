const BinarySearchTree = require('../challenges/tree/binarySearchTree');
const BinaryTree = require('../challenges/tree/tree');
const Node = require('../challenges/tree/treeNode');

describe('BinarySearchTree challenge', () => {

  let tree = null;

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

    tree = new BinaryTree(one);
  });

  it('instance test ', () => {
    let testtree = new BinarySearchTree(tree);
    // Can successfully make and instance of a BinarySearchTree
    expect(testtree instanceof BinarySearchTree).toBeTruthy();
  });



  it('contains test ', () => {
    let testtree = new BinarySearchTree(tree);
    expect(testtree.contains(12)).toBeTruthy();
    expect(testtree.contains(9)).toBeTruthy();
    expect(testtree.contains(5)).toBeTruthy();
    expect(testtree.contains(6)).toBeTruthy();
    expect(testtree.contains(4)).toBeTruthy();
    expect(testtree.contains(7)).toBeTruthy();
    expect(testtree.contains(16)).toBeTruthy();
    expect(testtree.contains(14)).toBeTruthy();
    expect(testtree.contains(17)).toBeTruthy();
    expect(testtree.contains(10)).toBeFalsy();
    expect(testtree.contains(20)).toBeFalsy();
    expect(testtree.contains(15)).toBeFalsy();
    expect(testtree.contains(1)).toBeFalsy();
    expect(testtree.contains(2)).toBeFalsy();
    expect(testtree.contains(3)).toBeFalsy();
    expect(testtree.contains(8)).toBeFalsy();
    expect(testtree.contains(11)).toBeFalsy();
    expect(testtree.contains(13)).toBeFalsy();
    expect(testtree.contains(18)).toBeFalsy();
    expect(testtree.contains(19)).toBeFalsy();
    expect(testtree.contains(21)).toBeFalsy();
  });


  it('add test ', () => {
    let testtree = new BinarySearchTree(tree);
    // make sure new numbers not in the tree
    expect(testtree.contains(21)).toBeFalsy();
    expect(testtree.contains(15)).toBeFalsy();
    expect(testtree.contains(13)).toBeFalsy();
    expect(testtree.contains(11)).toBeFalsy();
    expect(testtree.contains(3)).toBeFalsy();

    expect(testtree.add(21)).toEqual('Done Adding');
    expect(testtree.add(15)).toEqual('Done Adding');
    expect(testtree.add(13)).toEqual('Done Adding');
    expect(testtree.add(11)).toEqual('Done Adding');
    expect(testtree.add(9)).toEqual('Done Adding');
    expect(testtree.add(3)).toEqual('Done Adding');

    // make sure new numbers are now in the tree
    expect(testtree.contains(21)).toBeTruthy();
    expect(testtree.contains(15)).toBeTruthy();
    expect(testtree.contains(13)).toBeTruthy();
    expect(testtree.contains(11)).toBeTruthy();
    expect(testtree.contains(9)).toBeTruthy();
    expect(testtree.contains(3)).toBeTruthy();

  });

});


describe('Binary Tree', () => {

  let tree = null;

  beforeAll(() => {
    // create my tree 
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('preOrder()', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('inOrder()', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });

  it('postOrder()', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

});