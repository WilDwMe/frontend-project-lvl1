import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('Hi! what is your name?  ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let count = 0;

  const checkPrime = (num) => {
    let flag = false;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        flag = true;
      }
    }
    return flag;
  };

  const engine = () => {
    if (count < 3) {
      const exp = Math.round(Math.random() * 100);
      const rigthAnswer = checkPrime(exp) ? 'no' : 'yes';

      console.log(`Question: ${exp}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === rigthAnswer) {
        console.log('Correct!');
        // eslint-disable-next-line no-plusplus
        count++;
        engine();
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'`);
        console.log(`Let's try again ${name}!`);
      }
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  };
  engine();
};

export default even;