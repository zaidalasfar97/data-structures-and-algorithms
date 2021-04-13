'use strict';

let Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;


function multiBracketValidation(val) {
    // const bracket = [];
    const stack = new Stack();

    for (let index = 0; index < val.length; index++) {

        if (val[index] === '(' || val[index] === '[' || val[index] === '{') {
            stack.push(val[index]);
        }

        if (val[index] === ')' || val[index] === ']' || val[index] === '}') {

            const value = stack.pop();

            if (value === '(' && val[index] == '(') {
                return false;
            } else if (value === '[' && val[index] == '[') {
                return false;
            } else if (value === '{' && val[index] == '{') {
                return false;
            }



        }
    }


    if (stack.length > 0) {
        console.log('false');
        return false;
    } else {
        console.log('true');
        return true;
    }

};

multiBracketValidation('{}')


multiBracketValidation('{}(){}')

module.exports = multiBracketValidation;