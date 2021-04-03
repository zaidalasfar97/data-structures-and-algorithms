'use strict';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }


    insert(value) {
        let newData = new Node(value);
        if (!this.head) {
            this.head = newData;
        } else {
            newData.next = this.head;
            this.head = newData;
        }
    }

    includes(value) {
        if (this.head) {
            let includeNode = this.head;
            if (includeNode.value === value) {
                return true;
            }
            while (includeNode.next) {
                includeNode = includeNode.next;
                if (includeNode.value === value) {
                    return true;
                }
            }
        }
        return false;
    }

    toString() {
        let linkedlistString = '';
        if (!this.head) linkedlistString = 'Null';
        else {
            let current = this.head;
            linkedlistString = `{ ${current.value} } -> `;
            while (current.next) {
                current = current.next;
                linkedlistString += `{${current.value}} -> `;
            }
            linkedlistString += `NULL`;
        }
        return linkedlistString;
    }
}

module.exports = LinkedList;