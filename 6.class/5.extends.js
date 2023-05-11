class Amimal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('냠냠');
  }
  sleep() {
    console.log('쿨쿨');
  }
}

class Tiger extends Amimal {}
const tiger = new Tiger('노랭이');
console.log(tiger);
tiger.sleep();

class Dog extends Amimal {
  constructor(color, ownerName) {
    super(color); //필수
    this.ownerName = ownerName;
  }

  play() {
    console.log('놀자!');
  }
  //오버라이딩 - 덮어씌어짐
  eat() {
    super.eat(); //부모에 있는것을 불러오고 싶다면
    console.log('강쥐냠냠');
  }
}
const dog = new Dog('검둥이', '마리');
console.log(dog);
dog.eat();
dog.play();
