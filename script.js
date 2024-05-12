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
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);


// Ещё раз о важности return
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return      // возвращает undefined  
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);  // вернёт true, т.к. пустая функция возвращает undefined
// любая функция которая не содержит return возвращает undefined


// Задания на работу с функциями
// #1
function sayHello(text) {
    let res = "Привет, " + text + "!";
    console.log(res);
    return res;
}
sayHello('Антон');

// #2
function returnNeighboringNumbers(num) {
    let arr = [];
    arr[0] = num - 1;
    arr.push(num);
    arr.push(num + 1);
    console.log(arr);
    return arr;
}
returnNeighboringNumbers(5);

// #3
function getMathResult() {

}
// решение 3
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        console.log(num);
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    console.log(str);
    return str;
}

getMathResult(10, 5);
getMathResult(10, -5);

// Методы и свойства

const str = "teSt";

console.log(str.length); // свойство .length для определения количества символов

console.log(str.toUpperCase()); // возвращает новое значение и не меняет саму строку
console.log(str.toLowerCase());

let fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // поиск подстроки - вернет индекс 5, т.к. fruit начинается с 5ого индекса
console.log(fruit.indexOf("a")); // если не находит нужные значения то выдаст: -1

const frag = "Hello world";
// Метод .slice()
console.log(frag.slice(6, 11)); // вырезать часть текста начиная с номера индекса и заканчивая индексом следующим за последним символом
// в данном случае вырежет слово world т.к. w на 6ом индексе, а 11 индекс идет после последней буквы d

console.log(frag.slice(6)); // если указать только один аргумент то вырежтся начиная с него и до конца
console.log(frag.slice(-5, -1)); // если указать отрицательные значения то будет считаться всё наоборот с конца, получим worl

console.log(frag.substring(6, 11)); // похож на предыдущий, но не поддерживает отрицательные, они интерпретируются как ноль

console.log(frag.substr(6, 5)); // c какого индекса начать вырезать и сколько символов вырезать


// Методы для чисел Math. (Три самых частых)

const numb = 12.3;
console.log(Math.round(numb)); // метод округления до целого числа

const testing = "12.3px";
console.log(parseInt(testing)); // переводит число в другую систему исчисления, но в данном случае переводит текст в число, при этом строка обрезается до целого числа, т.е. 12
console.log(parseFloat(testing)); // берет число или строку и возвращает число в десятичном варианте, т.е. 12,3


// Продвинутые задания на использования функций
// Задача №1 (решил сам)

function calculateVolumeAndArea(a) {
    if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
        const answer = 'При вычислении произошла ошибка';
        return console.log(answer);
    } else {
    const volCube = a * a * a;
    const area = (a * a) *6;
    let result = 'Объем куба: ' + volCube +', площадь всей поверхности: ' + area;
    
    return console.log(result);
    }
}

calculateVolumeAndArea(10);

// Задача №2 (подсмотрел)

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);


// Упражнение по написанию кода 8: (*) Продвинутые задания на использование функций
// Задача №1

function getTimeFromMinutes(minutes) {
    if (minutes < 0 || typeof(minutes) !== 'number' || !Number.isInteger(minutes) ) {
        return "Ошибка, проверьте данные";
    }
    
    let hours = Math.trunc(minutes / 60);
    let minut = minutes % 60;
    let chas;

    switch (hours) {
        case 0:
            chas = "часов";
            break;
        case 1:
            chas = "час";
            break;
        case 2:
            chas = "часа";
            break;
        case 3:
            chas = "часа";
            break;
        case 4:
            chas = "часа";
            break;
        case 5:
            chas = "часов";
            break;
        case 6:
            chas = "часов";
            break;    
        case 7:
            chas = "часов";
            break;
        case 8:
            chas = "часов";
            break;
        case 9:
            chas = "часов";
            break;
        case 10:
            chas = "часов";
            break;
        default:
            console.log("Не верное значение!");
            break;
    }
    let result = "Это " + hours + " " + chas + " и " + minut + " минут";
    console.log(result);
    return result;
}
getTimeFromMinutes(150);

// Задача 2 (не получилось решить самому)

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}
findMaxNumber(1, 5, 6.6, 15);