'use strict';

const Node = require('./node.js');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }



    preOrder() {
        if (!this.root) {
            return `The tree is empty :(`;
        }
        const result = [];
        const _traverse = (node) => {
            result.push(node.value);
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return result;
    }


    inOrder() {
        if (!this.root) {
            return `The tree is empty :(`;
        }
        const result = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            result.push(node.value);
            if (node.right) _traverse(node.right);
        };
        _traverse(this.root);
        return result;
    }


    postOrder() {
        if (!this.root) {
            return `The tree is empty :(`;
        }
        const result = [];
        const _traverse = (node) => {
            if (node.left) _traverse(node.left);
            if (node.right) _traverse(node.right);
            result.push(node.value);
        };
        _traverse(this.root);
        return result;
    }
}


class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(value);
            return;
        } else {
            const addNewNode = function (node) {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                        return;
                    } else if (node.left !== null) {
                        return addNewNode(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new Node(value);
                        return;
                    } else if (node.right !== null) {
                        return addNewNode(node.right);
                    }
                } else {
                    return null;
                }
            };
            return addNewNode(node);
        }
    }

    contains(value) {
        let currentNode = this.root;
        while (currentNode.value !== value) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
                // console.log('ture');
            } else {
                currentNode = currentNode.right;
                // console.log('ture');
            }
            if (currentNode === null) {
                // console.log('false');
                return null;
            }
        }
        return currentNode;
    }

}
// const bst = new BST();
// bst.add(15);
// bst.add(25);
// bst.add(34);
// bst.add(46);
// bst.contains(15);
// bst.contains(25);
// bst.contains(46);
// bst.contains(34);
// bst.contains(22);
// bst.contains(324);



module.exports = { BinaryTree, BST };
