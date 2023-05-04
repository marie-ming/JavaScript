const iterate = (max, action) => {
  for (let i = 0; i < max; i++) {
    action(i);
  }
};

const num = (number) => {
  console.log(number);
};
const numDouble = (number) => {
  console.log(number * 2);
};

iterate(5, num);
iterate(5, numDouble);
