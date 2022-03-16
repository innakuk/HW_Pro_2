'use strict';

const x = +prompt('Pls enter random number from 1 to 50');
const y = +prompt('Pls enter random number from 50 to 100');
const operationAddition = '+';
const addition = x+y;
const operationSubtraction = '-';
const subtraction = x-y;
const operationMultiplication = '*';
const multiplication = x*y;
const operationDivision = '/';
const division = x/y;

console.log(`Результат: ${x}${operationAddition}${y}=${addition}`);
console.log(`Результат: ${x}${operationSubtraction}${y}=${subtraction}`);
console.log(`Результат: ${x}${operationMultiplication}${y}=${multiplication}`);
console.log(`Результат: ${x}${operationDivision}${y}=${division}`);


