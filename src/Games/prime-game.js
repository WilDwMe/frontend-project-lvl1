import engine from '../index.js';
import isPrime from '../isPrime.js';

const prime = () => {
  const exp = Math.round(Math.random() * 100);
  const rigthAnswer = isPrime(exp) ? 'no' : 'yes';
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return {
    expression: exp,
    answer: rigthAnswer,
    gameRules: rules,
  };
};

engine(prime, 0);

export default prime;