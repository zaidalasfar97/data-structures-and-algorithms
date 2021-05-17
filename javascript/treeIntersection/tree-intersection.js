const trees = require('../tree/tree.js');

function tree_intersection(treeOne, treeTwo) {
    const tree_one = treeOne.preOrder();
    const tree_two = treeTwo.preOrder();
    let treeValues = [];
    for (let i = 0; i < tree_one.length; i++) {
        if (tree_two.includes(tree_one[i])) {
            // console.log(tree_one[i]);
            treeValues.push(tree_one[i]);
        }
    }
    return treeValues;
}

module.exports = tree_intersection;