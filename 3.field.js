// class Fruit {
//   constructor(name, emoji) {
//     this.name = name;
//     this.emoji = emoji;
//   }

//   display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
// }

//접근제어자 - 캡슐화
//한번 만들어진 다음에 외부에서 수정할 수 없도록
//private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
//apple.name = '애플';

console.log(apple);
