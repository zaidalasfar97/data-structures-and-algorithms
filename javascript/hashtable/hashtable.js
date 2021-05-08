'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size)
    }

    add(key, value) {
        let hash = this.get(key);
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }

        this.table[hash].append({ [key]: value });
    }

    get(key) {
        let hash = 353;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 599 * key.charCodeAt(i) % this.table.length;
        }
        return hash;
    }

    contains(key) {
        const bucket = this.get(key);
        return this.table[bucket] ? true : false;
    }

    hash(key) {
        let hash = this.get(key);

        if (this.contains(key)) {
            if (this.table[hash].head) {
                let data = this.table[hash].head;
                if (Object.keys(data.value)[0] === key) {
                    return data.value[key];
                }
                while (data.next) {
                    data = data.next;
                    if (Object.keys(data.value)[0] === key) {
                        return data.value[key];
                    }
                }
            }
        }
        return null;
    }



}


module.exports = HashTable;