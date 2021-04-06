'use strict';

const LinkedList = require('../../linked-list/linked-list.js');
const zipLists = require('../ll-zip.js');


describe('ll-zip check', () => {
    it('should zip Linked Lists together when the list lengths are equal', () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();

        list1.insert(2);
        list1.insert(3);
        list1.insert(1);

        list2.insert(4);
        list2.insert(9);
        list2.insert(5);

        const zipper = zipLists(list1, list2);
        expect(zipper.toString()).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
    });
});