'use strict';
const Node = require('../linked-list').Node;
const LinkedList = require('../linked-list').LinkedList;

describe('Linked List test', () => {

  it('Should be empty', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });


  it('Should add head to linked-list', () => {
    let ll = new LinkedList();
    ll.insert(12);
    ll.insert(3);

    expect(ll.head.value).toEqual(3);
  });



  it('Should add new node to linked-list', () => {
    let ll = new LinkedList();
    let val = 22;
    ll.insert(val);

    expect(ll.head.value).toEqual(val);
    expect(ll.head.next).toBeNull();
  });



  it('should add new header to linked list', () => {

    let ll = new LinkedList();
    ll.insert(33);
    let val = 55;
    ll.insert(val);

    expect(ll.head.value).toEqual(val);
    expect(ll.head.next.value).toEqual(33);
  });



  it('Should insert multiple Nodes', () => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);

    expect(ll.length).toEqual(2);
  });



  it('Should return true if find a value else return false', () => {
    let ll = new LinkedList();
    ll.insert(2);

    expect(ll.includes(2)).toEqual(true);
    expect(ll.includes(2000)).toEqual(false);
  });



  it('Should return all values in ll as a string', () => {
    let ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    expect(ll.toString()).toEqual("{2} -> {1} -> Null");
  });
});
