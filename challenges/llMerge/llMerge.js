'use strict';


function mergeLists(list1, list2) {
  let listSelector = 0;
  let tempList = { head: {} };
  let currentNode ={};
  if (!list1.head.value) {
    currentNode = { ...list2.head };
    return currentNode;
  }
  if (!list2.head.value) {
    currentNode = { ...list1.head };
    return currentNode;
  }

  tempList.head = { ...list1.head };

  currentNode = tempList.head;
  currentNode.next = { ...list2.head };



  let currentNodeList1 = list1.head;
  let currentNodeList2 = list2.head;
  while (currentNode.next) {
    currentNode = currentNode.next;

    if (listSelector === 0) {
      if (currentNodeList1.next) {
        currentNode.next = { ...currentNodeList1.next };
        currentNodeList1 = currentNodeList1.next;
        listSelector++;
      } else {
        if (currentNodeList2.next) {
          currentNode.next = { ...currentNodeList2.next };
          break;
        } else {
          break;
        }
      }
    } else {
      if (currentNodeList2.next) {
        currentNode.next = { ...currentNodeList2.next };
        currentNodeList2 = currentNodeList2.next;
        listSelector--;
      } else {
        if (currentNodeList1.next) {
          currentNode.next = { ...currentNodeList1.next };
          break;
        }
        break;
      }
    }


  }
  return tempList;
}

// let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: { value: 'test1 after head2', next: { value: 'test1 after head3', next: null } } } } };
// let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };
// let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: null } } };
// let list2 = { head: { value: 'test 2', next: null } };

// let list1 = { head: { value: 'test 1', next: { value: 'test1 after head', next: null } } };
// let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };

// let list1 = { head: {} };
// let list2 = { head: { value: 'test 2', next: { value: 'test2 after head', next: { value: 'test2 after head2', next: { value: 'test2 after head3', next: null } } } } };


// let x = mergeLists(list1, list2);
// // console.log('fffffffff', mergeLists(list1, list2));
// console.log(x.head);
// console.log(x.head.next);
// console.log(x.head.next.next);
// console.log(x.head.next.next.next);
// console.log(x.head.next.next.next.next);
// console.log(x.head.next.next.next.next.next);
// console.log('rrrrr', toString(mergeLists(list1, list2)));

module.exports = mergeLists;
