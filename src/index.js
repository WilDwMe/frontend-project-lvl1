import readlineSync from 'readline-sync';
import greet from './cli.js';

const name = greet();

const engine = (game, iter) => {
  let count = 0 + iter;
  const gameIn = game();

  // console.log(gameIn.gameRules);

  if (count < 3) {
    console.log(gameIn.answer);
    console.log(`Question: ${gameIn.expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === gameIn.answer) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      count += 1;
      engine(game, count);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameIn.answer}'`);
      console.log(`Let's try again ${name}!`);
      count = 0;
    }
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default engine;