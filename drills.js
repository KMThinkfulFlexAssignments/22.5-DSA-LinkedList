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

  //currently not working
  SLL.insertBefore('Athena', 'Boomer');

  //currently not working
  //SLL.insertAfter('Hotdog', 'Halo');

  //method inserted above and is working
  //SLL.insertAt('Kat', 3);

  //currently not working and producing an error that crashes everything
  //SLL.remove('Tauhida');

  return SLL;
}
console.log(main());

//3. Supplemental functions for a linked list
//Time complexity:
let testList = main();
//shows the linked list
function display(list) {
  let currentNode = list.head;
  while(currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
  console.log('End of list');
}
//display(testList);

//shows size of the linked list
function size(list) {

}

//determines if a list is empty without using the size function
function isEmpty() {

}

//finds the node prior to the input
function findPrevious() {

}

//returns the last node in the list
function findLast() {

}

//4. Mystery program
//Time complexity:
//The following program removes duplicate items from the linked list.

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
//Time complexity:

//6. 3rd from the end
//Time complexity:

//7. Middle of a list
//Time complexity:

//8. Cycle in a list
//Time complexity:

//9. Sorting a list
//Time complexity: