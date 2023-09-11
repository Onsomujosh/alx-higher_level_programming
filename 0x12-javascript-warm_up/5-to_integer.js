#!/usr/bin/node

//script that prints argument to int if possible

const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
