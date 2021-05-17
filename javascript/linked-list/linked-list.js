'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insert(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;

        return this;
    }
    includes(value) {
        let newNode = this.head;
        while (newNode) {
            if (newNode.value === value) {
                console.log(true);
                return true;
            } else {
                newNode = newNode.next;
            }
        }
        return false;
    }
    toString() {
        let str = '';
        let newNode = this.head;
        while (newNode) {
            str += `{ ${newNode.value} } -> `;
            newNode = newNode.next;
        }
        return str + 'NULL';
    }

    insertBefore(value, newVal) {
        const node = new Node(newVal);
        console.log(node);
        console.log('head', this.head);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        console.log('currentNode', currentNode);
        node.next = currentNode;
        console.log('node', node);
        this.head.next = node;
        console.log(this.head);
        this.size++;

        return this;
    }
    insertAfter(value, newVal) {
        const node = new Node(newVal);
        console.log(node);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        console.log(currentNode);
        while (currentNode.value !== value) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        node.next = currentNode.next;
        currentNode.next = node;
        console.log(this.head);
        this.size++;

        return this;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    kthFromEnd(k) {
        let index = this.size - k - 1;

        if (k > this.size || k < 0 || index < 0) {
            let msg = 'Exception';
            return msg;
        } else {
            let currNode = this.head;

            for (let i = 0; i < index; i++) {
                currNode = currNode.next;
            }
            console.log(currNode.value);
            return currNode.value;
        }
    }

}

const ll = new LinkedList();
ll.append(5);
module.exports = LinkedList;