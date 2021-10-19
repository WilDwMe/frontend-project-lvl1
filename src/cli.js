import readlineSync from 'readline-sync';


const greeting = () => { 
    const name = readlineSync.question('Hi! what is your name?  ');
    console.log(`Hello and nice to meet you ${name}!`);
};


export default greeting;
