import readlineSync from 'readline-sync';
import greet from './cli.js';

const engine = (game) => {
  const name = greet();
  let winCount = 0;
  const gameIn = game();
  console.log(gameIn.gameRules);

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

export default engine;