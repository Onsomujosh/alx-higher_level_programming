#!/usr/bin/node

// Script that prints argument
// to integer if possible.

const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
