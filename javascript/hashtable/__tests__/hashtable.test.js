'use strict';

const HashTable = require('../hashtable.js');

const hT = new HashTable(100);

describe('HashTable check', () => {
    it('create a new hash table', () => {
        expect(hT.table.length).toEqual(100);
    });

    it('Should add & value to hash-table', () => {
        const key = 'zaid';
        const value = '1234';
        hT.add(key, value);
        expect(hT.hash(key)).toBe(value);
    });

    it('Should be null for a key that not in the hashtable', () => {
        let key = 'zaid1234'
        expect(hT.hash(key)).toBe(null);
    });
});