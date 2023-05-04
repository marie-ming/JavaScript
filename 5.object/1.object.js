let apple = {
  name: 'apple',
  'hello-bye': '🖐',
  0: 1,
  ['hello-bye1']: '🖐',
};

console.log(apple.name); //마침표 표기법
console.log(apple['hello-bye1']); //대괄호 표기법

//속성 추가
apple.emoji = '😍';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제
delete apple.emoji;
console.log(apple);
