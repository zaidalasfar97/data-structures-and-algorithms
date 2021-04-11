'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node
        return this.top;
    }

    pop() {
        if (this.top == null) {
            throw new Error('stack is empty')
        }
        let removedValue = this.top.value
        this.top = this.top.next

        return removedValue

    }
    peek() {
        if (this.top == null) {
            throw new Error('stack is empty')

        }
        return this.top.value
    }
    isEmpty() {
        if (this.top) {
            return false
        } else {
            return true;
        }
    }
}


class Queue {
    constructor() {
        this.storage = [];
        this.front = null
    }
    enqueue(value) {
        let node = new Node(value);
        if (!this.front) {
            this.front = node
            this.storage.push(this.front.value)
            return this.front
        }
        let currentNode = this.front;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.storage.push(node.value)
        return this.front;


    }
    dequeue() {
        if (this.front == null) {
            throw new Error('stack is empty')
        }
        let removedValue = this.front.value
        this.front = this.front.next
        this.storage.pop()
        return removedValue

    }
    peek() {
        if (this.front == null) {
            throw new Error('stack is empty')
        }

        return this.front.value

    }
    isEmpty() {
        if (this.front == null) {
            return false
        }
        return true
    }
}

module.exports = { Stack, Queue }