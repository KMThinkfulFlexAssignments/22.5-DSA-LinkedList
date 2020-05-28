'use strict';

//1. Create a linked list class
//Time complexity: N/A
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if(this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  insertBefore(item, node) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    if(node === this.head.value) {
      this.head = new _Node(item, this.head);
      return this.head;
    }
    let tempNode = this.head;
    let before = null;
    while(tempNode.value !== node) {
      before = tempNode;
      tempNode = tempNode.next;
    }
    before.next = new _Node(item, tempNode);
  }
  insertAfter(item, node) {
    if(this.head === null) {
      this.insertFirst(item);
    }
    if(node === this.head.value) {
      this.head = new _Node(item, this.head);
      return this.head;
    }
    let after = node;
    let tempNode = this.head;
    while(tempNode.value !== after) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, tempNode.next);
  }
  insertAt(item, position) {
    let tempNode = this.head;
    let after;
    for(let i = 1; i < position -1; i++) {
      tempNode = tempNode.next;
    }
    after = tempNode.next;
    tempNode.next = new _Node(item, after);
  }
  find(item) {
    let currentNode = this.head;
    if(!this.head) {
      return null;
    }
    while(currentNode.value !== item) {
      if(currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  remove(item) {
    if(!this.head) {
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    while((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if( currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }
}

//2. Creating a singly linked list
//Time complexity:
function main() {
  const SLL = new LinkedList;

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Halo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.remove('Husker');

  //method inserted above
  SLL.insertBefore('Athena', 'Boomer');

  //method inserted above
  SLL.insertAfter('Hotdog', 'Halo');

  //method inserted above
  SLL.insertAt('Kat', 3);

  //method inserted above
  SLL.remove('Tauhida');

  return SLL;
}
//console.log(main());

//3. Supplemental functions for a linked list
//Time complexity:
let testList = main();

//shows the linked list
function display(list) {
  let currentNode = list.head;
  if(!list.head) {
    return console.log('List is empty');
  }
  while(currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
  console.log('End of list');
}
//display(testList);
//display(new LinkedList);

//shows size of the linked list
function size(list) {
  let currentNode = list.head;
  let counter = 1;
  while(currentNode.next !== null) {
    currentNode = currentNode.next;
    counter ++;
  }
  return counter;
}
//console.log(size(testList));

//determines if a list is empty without using the size function
function isEmpty(list) {
  if(!list.head) {
    return 'This list is empty';
  } return 'This list is not empty';
}
//console.log(isEmpty(testList));

//finds the node prior to the input
function findPrevious(list, node) {
  let currentNode = list.head;
  let previousNode;
  while(currentNode.value !== node) {
    previousNode = currentNode;
    currentNode = currentNode.next;
  } return previousNode;
}
//console.log(findPrevious(testList, 'Hotdog'));

//returns the last node in the list
function findLast(list) {
  let currentNode = list.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  } return currentNode;
}
//console.log(findLast(testList));

//4. Mystery program
//Time complexity: O(n^2) because each element has to see every other element in the list
//The following program removes nodes with duplicate values from the linked list.
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//5. Reverse a list
//Time complexity: O(n)
function reverseList(list) {
  var reversedList = new LinkedList;
  function helperFunction(currentNode) {
    if (!currentNode) {
      return;
    }
    if (currentNode.next) {
      helperFunction(currentNode.next);
    }
    console.log(currentNode.value);
    reversedList.insertFirst(currentNode);
  }
  helperFunction(list.head);
  return reversedList;
}
//reverseList(testList);

//6. 3rd from the end
//Time complexity: O(n)
function thirdFromEnd(list) {
  let length = size(list);
  let currentNode = list.head;
  if(length < 3) {
    return 'List is too short';
  } for (let i = 0; i < length - 3; i ++) {
    currentNode = currentNode.next;
  }
  return currentNode;
}
//console.log(thirdFromEnd(testList));

//7. Middle of a list
//Time complexity: O(n)
function middleOfList(list) {
  let currentNode = list.head;
  let length = size(list);
  let middle;
  let after;
  if(length % 2 ===0) {
    middle = length / 2;
    for(let i = 1; i < middle; i ++) {
      currentNode = currentNode.next;
    } after = currentNode.next;
    return currentNode + 'and' + after;
  }
  if(length % 2 === 1) {
    middle = Math.round(length/2);
    for(let i = 1; i < middle; i ++) {
      currentNode = currentNode.next;
    } return currentNode;
  }
}
//console.log(middleOfList(testList));

//8. Cycle in a list
//Time complexity: O(n)
let cycleList = new LinkedList;
cycleList.insertLast('1');
cycleList.insertLast('2');
cycleList.insertLast('3');
cycleList.insertLast('4');
cycleList.insertBefore('5', '1');
cycleList.find('1').next = cycleList.find('5');

function hasCycle(list) {
  let tempList = new LinkedList;
  let currentNode = list.head;
  while(currentNode !== null) {
    tempList.insertLast(currentNode.value);
    let tempCurrentNode = tempList.head;
    while(tempCurrentNode !== null) {
      if(currentNode.next.value === tempCurrentNode.value) {
        return true;
      }
      tempCurrentNode = tempCurrentNode.next;
    }
    currentNode = currentNode.next;
  }
  return false;
}
//console.log(hasCycle(cycleList));

//9. Sorting a list
//Time complexity:
let unsortedList = new LinkedList;
unsortedList.insertLast(3);
unsortedList.insertLast(2);
unsortedList.insertLast(5);
unsortedList.insertLast(4);
unsortedList.insertLast(1);
unsortedList.insertLast(6);


function sortList(list) {
  let sortedList = new LinkedList;
  let minVal;
  while(list.head) {
    minVal = minimumValue(list);
    sortedList.insertLast(minVal);
    list.remove(minVal);
  }
  return sortedList;
}
console.log(display(sortList(unsortedList)));
//expected outcome 1->2->3->4->5->6

function minimumValue(list) {
  let currentNode = list.head;
  let currentValue = list.head.value;
  while(currentNode && currentNode.next) {
    if(currentValue > currentNode.next.value) {
      currentValue = currentNode.next.value;
    }
    currentNode = currentNode.next;
  }
  return currentValue;
}
//console.log(minimumValue(unsortedList));