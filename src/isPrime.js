const isPrime = (num) => {
  let flag = false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = true;
    }
  }
  return flag;
};

export default isPrime;
