'use strict';

function repeated(str) {
    const repWords = str.split(/[\s,]+/);
    let newArr = [];

    for (let i = 0; i < repWords.length; i++) {
        let wordRep = repWords[i].toLowerCase();
        const ifExists = newArr.includes(wordRep);
        if (ifExists) {
            // console.log(wordRep);
            return wordRep;
        } else {
            newArr.push(wordRep);
        }
    }
    return 'No Words Repeated';
}

module.exports = repeated;