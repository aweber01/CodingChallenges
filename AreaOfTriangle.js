const input = require('readline-sync');

let base = input.question("What is the length of the base of the triangle? ");

let height = input.question("What is the height of the triangle? ");

let triArea = (base, height) =>
	(base * height) / 2;

console.log('The area of the triangle with a base of ' + base + ' and a height of ' + height + ' is ' + triArea(base, height) + ".");
