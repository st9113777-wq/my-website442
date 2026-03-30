import { greet, add, multiply } from './utils.js';
import { user } from './data.js';


const { name, age, city } = user;


console.log(greet(name));
console.log(`Користувач: ${name}, ${age} років, місто: ${city}`);


console.log("Сума чисел (1, 2, 3, 4):", add(1, 2, 3, 4));


const baseArray = [1, 2, 3];
const newArray = [...baseArray, 4, 5, 6];
console.log("Об'єднаний масив:", newArray);