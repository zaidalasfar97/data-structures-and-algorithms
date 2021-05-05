'use strict';
const LinkedList = require('../linked-list/linked-list.js');

xdescribe('Linked List', () => {

  let listTest = new LinkedList();

  it('Should be empty linked list', () => {
    expect(listTest.head).toEqual(null);
  });


  it('Should insert new node to linked list', () => {
    listTest.insert(12);
    expect(listTest.head.value).toBe(12);
  });


  it('Should insert new value to linked list', () => {
    listTest.insert(20);
    expect(listTest.head.value).toBe(20);
  });


  it('Should find a value anywhere in the linked list', () => {
    listTest.insert(22);
    expect(listTest.includes(22)).toBeTruthy();
  });


  it('should convert to string', () => {
    let emptyList = new LinkedList();
    expect(listTest.toString()).toBe('{ 22 } -> {20} -> {12} -> NULL');
    expect(emptyList.toString()).toBe('Null');
  });
});