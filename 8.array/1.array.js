//자바스크립트에서의 배열은
//오브젝트와 유사함!
//일반적인 배열의 동작을 흉내낸 특수한 객체다!

const array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});

console.log(array);
