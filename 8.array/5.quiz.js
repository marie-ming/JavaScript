// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  const result = Array.from(array);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === from) {
      result[i] = to;
    }
  }
  return result;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(array, '🍓', '🥝'));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array, item) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      total++;
    }
  }
  return total;
}
const array1 = ['🍌', '🥝', '🍇', '🥝'];
console.log(count(array1, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}
const array2 = ['🍌', '🥝', '🍇'];
console.log(match(array2, array));
