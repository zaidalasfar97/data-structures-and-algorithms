'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class kTree {
    constructor(root = null) {
        this.root = root;
    }

    fizzBuzzTree(tree) {
        this.root = tree.root;

        if (!tree.root) {
            return 'Tree empty';
        }

        const _traverse = (node) => {
            if (node.value % 3 === 0) {
                node.value = 'Fizz';
            } else if (node.value % 5 === 0) {
                node.value = 'Buzz';
            } else if (node.value % 3 === 0 && node.value % 5 === 0) {
                node.value = 'FizzBuzz';
            } else {
                node.value = `${node.value}`;
            }

        }
        _traverse(this.root);
    }
}

module.exports = { Node, kTree };