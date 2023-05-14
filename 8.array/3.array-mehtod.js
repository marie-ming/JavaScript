const fruits = ['🍋', '🍉', '🍎', '🍑'];

//배열 자체를 수정 (업데이트)
fruits.push('🍓'); // 추가 - 제일 뒤
fruits.unshift('🍌'); // 추가 - 제일 앞

fruits.pop(); // 제거 - 제일 뒤
fruits.shift(); // 제거 - 제일 앞

fruits.splice(1, 1); // 1부터 1개 삭제
fruits.splice(1, 0, '🍒', '🍍'); // 1부터 0개 삭제, 체리 추가
console.log(fruits);

//잘라진 새로운 배열 생성
let newArr = fruits.slice(0, 2); //0부터 2전까지
console.log(newArr);
console.log(fruits);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
arr = arr.flat(2);

//특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); //1부터 3전까지
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);
