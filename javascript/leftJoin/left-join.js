'use strict';
function leftJoin(hash1, hash2) {
    let arr = [];
    let values = hash1.table;
    // console.log(values);
    for (let index = 0; index < values.length; index++) {
        if (values[index]) {
            let key = Object.keys(values[index].head.value);

            let valueOne = Object.values(values[index].head.value);

            let valuetwo = hash2.get(key[0]);

            arr.push([key[0], valueOne[0], valuetwo]);
        }
    }
    return arr;

}


module.exports = leftJoin;