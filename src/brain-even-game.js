import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to Brain Games');
  const name = readlineSync.question('Hi! what is your name?  ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let count = 0;

  const game = () => {
    if (count < 3) {
      const num = Math.round(Math.random() * 100);
      let rigthAnswer;

      if (num % 2 === 0) {
        rigthAnswer = 'no';
      } else {
        rigthAnswer = 'yes';
      }

      console.log(`Question: ${num}`);
      const answer = readlineSync.question('Your answer: ');

      if (answer === rigthAnswer) {
        console.log('Correct!');
        // eslint-disable-next-line no-plusplus
        count++;
        game();
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'`);
        console.log(`Let's try again ${name}`);
      }
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  };
  game();
};

export default brainEven;