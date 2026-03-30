"use strict";

// анкета

let name = prompt("Введіть ваше ім'я");
let age = Number(prompt("Введіть ваш вік"));
let city = prompt("З якого ви міста?");
let color = prompt("Ваш улюблений колір?");
let work = confirm("Ви працюєте?");

// перевірка повноліття
let adult = age >= 18;

// типи змінних
console.log("Ім'я:", name, typeof name);
console.log("Вік:", age, typeof age);
console.log("Місто:", city, typeof city);
console.log("Колір:", color, typeof color);
console.log("Працює:", work, typeof work);

// результат
alert(
    "Ім'я: " + name +
    "\nВік: " + age +
    "\nМісто: " + city +
    "\nУлюблений колір: " + color +
    "\nПрацює: " + work +
    "\nПовнолітній: " + adult
);