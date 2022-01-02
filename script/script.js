'use strict;'




let year = 2018;

if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)) {
  console.log(year + ' год - високосный');
} 
else {
	console.log(year + ' год - невисокосный');
} 




/*
//

let year = 2023;


if (year % 4 === 0){
console.log(year + ' год - високосный');
}
else if (year % 4 !== 0){
	console.log(year + 'год - НЕвисокосный');
} 


//
let marry = true;
let christmas = false;

console.log(marry || christmas);

//

let merry = true;
console.log(!merry);
console.log(typeof !merry);

//

let zarplata = 401;

if (zarplata >= 1000){
	console.log('покупаем машину');
}
else if (zarplata >= 600){
	console.log('покупаем конфеты');
} 
else if (zarplata >= 400){
	console.log('снимаем деньги со счета');
} 
else if (zarplata <= 100){
	console.log('идем на паперть');
} 



let num1 = 10;
num1 /= 2
console.log(num1);

let fahrenheit = 451;
let celsius = (fahrenheit-32) / 1.8;
console.log(celsius);
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);


let username;
console.log(typeof username);

let trueOrFalse = 58 < 18;
console.log(trueOrFalse);

let userInfo = {
	name: 'Григорий',
	age: 31,
	male: 'male'
}

console.log(userInfo);
console.log(typeof userInfo);












console.log('2' + '2');
console.log((2 +2)*2);
 console.log('Я' + ' ' + 'люблю' + ' ' + 'Лену');



if (true) {
	var size = 15;
}
console.log(size);

/*
let userEyeColor

let user = 'Вася';
let userName = 'Вася';

console.log(user);












/*
const sumSizes = 22 + 30;
console.log (sumSizes);


console.log('JS')
console.log('Учим')




//Вариант №1
console.log('Учим JS')

//Вариант №2
console.log('JS')
console.log('Учим')

//Вариант №3
console.log('Учим') console.log('JS')

//Вариант №4
console.log('Учим);
console.log('JS');

console.log('Привет, Мир');
['Учим', 'JS'].forEach(alert);

[10, 100, 1000].forEach(alert);
*/