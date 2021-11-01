import engine from '../index.js';

const progress = (elem, n) => {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = elem;
    // eslint-disable-next-line no-param-reassign
    elem += n;
  }
  return arr;
};

function check(arr1, arr2) {
  let num = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      num = arr1[i];
    }
  }
  return num;
}

const progression = () => {
  const start = Math.round(Math.random() * 10);
  const index = 5 + Math.round(Math.random() * 5);
  const arr = progress(start, index);
  arr[Math.round(Math.random() * index)] = '..';
  const checking = progress(start, index);
  const rules = 'What number is missing in the progression?';
  const exp = arr.join(' ');
  const rigthAnswer = String(check(checking, arr));
  // console.log(rigthAnswer);
  return {
    expression: exp,
    answer: rigthAnswer,
    gameRules: rules,
  };
};

engine(progression, 0);

export default progression;
