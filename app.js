const _ = require('lodash');

const arr = [1,[2,6,7,8,[3,66,55,[4,[5,[6,[7,[8,[9,[10]]]]]]]]]];

console.log(arr);
const deepArray = _.flattenDeep(arr);

console.log(deepArray);
