"use strict"; 

console.log("Підключено JavaScript для Практичної роботи №2");


function greet() {
    console.log("Привіт, світ!");
}
greet(); 

const multiply = function(a, b) {
    return a * b; 
};
console.log(multiply(4, 5)); 

const divide = (a, b) => a / b; 
console.log(divide(20, 4)); 


function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 


const person = {
    name: "Олена",
    sayHello() {
        console.log(`Привіт, мене звуть ${this.name}`);
    }
};
person.sayHello(); 


function createConverter(multiplier, offset) {
    return function(temp) {
        return (temp * multiplier) + offset;
    };
}

const cToF = createConverter(1.8, 32); 

function runConverter() {
    const tempInput = prompt("Введіть температуру:");
    const temp = Number(tempInput); 
    
    const result = cToF(temp);
    alert(`Результат: ${result}°F`); 
    console.log(`Результат: ${result}°F`);
}