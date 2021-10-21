import readlineSync from 'readline-sync';
import isPrime from '../isPrime.js';
import greet from '../cli.js';

const even = () => {
  const exp = Math.round(Math.random() * 100);
  const rigthAnswer = isPrime(exp) ? 'no' : 'yes';
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  return {
    expression: exp,
    answer: rigthAnswer,
    gameRules: rules,
  };
};

const name = greet();
let winCount = 0;

const engine = (game) => {
  const gameIn = game();

  if (winCount < 3) {
    console.log(`Question: ${gameIn.expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameIn.answer) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      winCount++;
      engine(game);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameIn.answer}'`);
      console.log(`Let's try again ${name}!`);
    }
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

engine(even, name);

export default even;