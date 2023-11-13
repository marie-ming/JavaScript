// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍓', '🍏', '🍑', '🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x, y, z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title, emoji);

const minji = { name: 'Minji', age: 27, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(minji);

const { name, age, job: occupation, pet = 'cat' } = minji;
console.log(name, age, occupation, pet);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
