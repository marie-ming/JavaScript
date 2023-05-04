class Fruit {
  static MAX_FRUITS = 5;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  //클래스 레벨의 메서드
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }

  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// console.log(Fruit.name); //호출불가
// Fruit.display;

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
