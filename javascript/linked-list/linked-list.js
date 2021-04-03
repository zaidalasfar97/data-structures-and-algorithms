'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(value) {
        try {
            let newData = this.head;
            this.head = new Node(value, newData);
            this.length++;

        }
        catch (error) {
            console.log('insert method', error);
        }
    }

    includes(value) {
        try {

            let includeData = this.head;

            while (includeData) {
                if (includeData.value === value) {
                    return true;
                }
                includeData = includeData.next;
            }
            return false;
        } catch (error) {
            console.log('includes method', error);
        }
    }

    toString() {
        try {
            let linkList = "";

            while (this.head) {
                linkList += `{${this.head.value}} -> `
                this.head = this.head.next;
            }
            linkList += "Null";
            console.log(linkList);
            return linkList;
        } catch (error) {
            console.log('toString method', error);
        }
    }
}


const ll = new LinkedList();

module.exports = {
    Node: Node,
    LinkedList: LinkedList
}