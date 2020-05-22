'use strict';

//generic node class for linked lists
//the '_' that denotes a private class so it can only be accessed by the linked list class
//the value of next is either the next item in the linked list, or null for the last item
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//the head of a linked list contains the first node
class LinkedList {
  constructor() {
    this.head = null;
  }
  //inserts new item at the beginning of the linked list
  //Steps:
  //1) Create a new node item
  //2) Point the list head to that new node item
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //inserts a new item at the end of the linked list
  //Steps:
  //1) Create a new node item
  //2) Check if the list is empty
  //2a) If yes then insert new node item as the only item in the list like above
  //2b) If no then continue...
  //3) Starting at the head of the list, move through each item until you find one with a null next value
  //4) Set the next value of that item to the new node item
  //5) The new item is now the last item on the list, as its pointer (next value) is null
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //retrieves an item from a linked list
  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  //removes an item from the start of the list
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}