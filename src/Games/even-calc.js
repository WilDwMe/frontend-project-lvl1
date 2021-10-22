import engine from '../index.js';

const calc = () => {
  const operators = ['-', '+', '*'];
  const randomOp = operators[Math.round(Math.random() * 2)];
  const a = Math.round(Math.random() * 10);
  const b = Math.round(Math.random() * 10);
  const exp = a + randomOp + b;
  // eslint-disable-next-line no-eval
  const rigthAnswer = String(eval(exp));
  const rules = 'What is the result of the expression?';
  return {
    expression: exp,
    answer: rigthAnswer,
    gameRules: rules,
  };
};

engine(calc, 0);

export default calc;