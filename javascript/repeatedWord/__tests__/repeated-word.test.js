'use strict';

const repeated = require('../repeated-word');
const one = "Once upon a time, there was a brave princess who...";
const two = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
const three = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
const four = 'Hello there';

describe('Repeated Word check', () => {
    it('should find the repeated words', () => {
        expect(repeated(one)).toBe('a');
        expect(repeated(two)).toBe('it');
        expect(repeated(three)).toBe('summer');
    });
    it('should dont find repeated words ', () => {
        expect(repeated(four)).toBe('No Words Repeated');
    });
});