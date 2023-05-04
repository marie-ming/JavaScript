const user = { name: 'Marie' };

const displayObj = (obj) => {
  obj.name = 'Bob'; // ❌❌❌
  console.log(obj);
};

const changeName = (obj) => {
  return console.log({ ...obj, name: 'Bob' });
};

console.log(user);
//displayObj(user);
changeName(user);
console.log(user);
