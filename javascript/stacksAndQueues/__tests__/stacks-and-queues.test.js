'use strict';
const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

let stackClass = new Stack();
let queueClass = new Queue();


describe('stacks check', () => {

    it('should push a value into the stack', () => {

        let result = stackClass.push(5);
        expect(result.value).toBe(5)
    })
    it('Should remove value at the top of stack', () => {

        stackClass.push(1)
        stackClass.push(2)
        stackClass.push(3)
        let result = stackClass.pop();
        expect(result).toBe(3)
    })
    it('Should show you the top value of the stack', () => {
        stackClass.push('a')
        stackClass.push('b')
        stackClass.push('c')
        let result = stackClass.peek()
        expect(result).toBe('c')
    });

    it('Should return true or false', () => {

        let result = stackClass.isEmpty()
        expect(result).toBe(false)
    })

});
describe('Queues check', () => {

    it('enqueue should push a value into the Queue', () => {
        let result = queueClass.enqueue(5);
        expect(result.value).toBe(5)
    })
    it('dequeue should remove value at the last of queue', () => {
        let queueClass = new Queue();

        queueClass.enqueue(1)
        queueClass.enqueue(2)
        queueClass.enqueue(3)
        let result = queueClass.dequeue();
        expect(result).toBe(1)
    })
    it('Peek should show you the top value of the queue', () => {
        let queueClass = new Queue();

        queueClass.enqueue('a')
        queueClass.enqueue('b')
        queueClass.enqueue('c')
        let result = queueClass.peek()
        expect(result).toBe('a')
    });
    it('isEmpty should return true', () => {

        let result = stackClass.isEmpty()
        expect(result).toBe(false)
    })
})