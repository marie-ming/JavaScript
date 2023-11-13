// 모든 Interable은 Spread 될 수 있다,
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 3);

//Array Concat
const fruits1 = ['🍓', '🍏'];
const fruits2 = ['🍑', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🥑', ...fruits2];
console.log(arr);

//Object
const minji = { name: 'Minji', age: 27 };
const updated = {
  ...minji,
  job: 's/w engineer',
};
console.log(minji, updated);
