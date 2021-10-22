import isPrime from '../isPrime.js';
import engine from '../index.js';

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

engine(even, 0);

export default even;