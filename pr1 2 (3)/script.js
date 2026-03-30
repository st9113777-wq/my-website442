"use strict"; 


class User {
    constructor(name, age, profession) {
        this.name = name;
        this.age = Number(age);
        this.profession = profession;
    }

    display() {
        return `Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`;
    }
}


class Admin extends User {
    constructor(name, age, profession, role) {
        super(name, age, profession); 
        this.role = role;
    }

    
    display() {
        return `${super.display()}, Роль: ${this.role}`;
    }
}

// Функція для інтерактиву
function runUserLibrary() {
    const name = prompt("Введіть ім'я:");
    const age = prompt("Введіть вік:");
    const profession = prompt("Введіть професію:");
    const role = prompt("Введіть роль (для адміна):");

    // Валідація
    if (Number(age) <= 0 || isNaN(age)) {
        alert("Помилка: Вік має бути додатним числом!");
        return;
    }

    const person = role ? new Admin(name, age, profession, role) : new User(name, age, profession);
    
    alert(person.display());
    console.log(person.display());
}