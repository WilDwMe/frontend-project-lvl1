import readlineSync from 'readline-sync';
import isPrime from '../isPrime.js';

const even = () => {
  const exp = Math.round(Math.random() * 100);
  const rigthAnswer = isPrime(exp) ? 'no' : 'yes';

  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('Hi! what is your name?  ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let count = 0;

  const engine = () => {
    if (count < 3) {
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