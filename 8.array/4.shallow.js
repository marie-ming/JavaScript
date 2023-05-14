// 얕은 복사 Shallow Copy - 객체는 메모리 주소를 전달
// 자바스크립트에서 복사할 떄는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign

const pizza = { name: '🍕', price: 2 };
const hambuger = { name: '🍔', price: 3 };
const potato = { name: '🍟', price: 1 };

const store1 = [pizza, hambuger];
const store2 = Array.from(store1);

store2.push(potato);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 10;
console.log('store1', store1);
console.log('store2', store2);
