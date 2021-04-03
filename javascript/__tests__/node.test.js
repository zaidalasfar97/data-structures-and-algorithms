'use strict';
const Node = require('../linked-list/node.js');

describe('node file test', () => {
    it('init node class', () => {
        let value = 5;
        let node = new Node(value);
        expect(node.value).toEqual(5);
        expect(node.next).toEqual(null);
    });
});