import engine from '../index.js';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

const gcd = () => {
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);
  const exp = `${a} ${b}`;
  const calcExpr = NOD(a, b);
  // eslint-disable-next-line no-eval
  const rigthAnswer = String(eval(calcExpr));
  const rules = 'Find the greatest common divisor of given numbers.';
  return {
    expression: exp,
    answer: rigthAnswer,
    gameRules: rules,
  };
};

engine(gcd, 0);

export default gcd;