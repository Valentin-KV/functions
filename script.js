"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(7, 8));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log("Hi");
};

logger();

const calc = (a, b) => a + b;


// Универсальная функция для расчета курса валют
const usdCurr = 3.25;
const eurCurr = 3.5;

function convert(amount, curr) {
    console.log(curr * amount);
}
convert(500, usdCurr);
convert(500, eurCurr);

