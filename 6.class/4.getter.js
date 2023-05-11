//접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    //호출하는 시점에 데이터를 만들어서 리턴, 속성에 가까움
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('민지', '정');
console.log(student.fullName); //읽을 때 get 호출

student.fullName = '김철수'; //할당할 때 set 호출
