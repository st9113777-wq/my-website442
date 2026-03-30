"use strict"; 


class PersonalInfo {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class Resume {
    constructor(personalInfo) {
        this.personal = personalInfo;
    }

    
    render() {
        const output = document.getElementById('resume-output');
        output.innerHTML = `
            <h2>Готове резюме</h2>
            <p><strong>Ім'я:</strong> ${this.personal.name}</p>
            <p><strong>Email:</strong> ${this.personal.email}</p>
            <p><strong>Вік:</strong> ${this.personal.age}</p>
        `;
    }
}


const createValidator = (message) => (value) => {
    if (value.trim() === "") {
        alert(message);
        return false;
    }
    return true;
};

const nameCheck = createValidator("Будь ласка, введіть ім'я!");

// 3. Головна функція
function generateResume() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const age = document.getElementById('userAge').value;

    // Валідація
    if (!nameCheck(name)) return;

    // Створення об'єктів
    const myInfo = new PersonalInfo(name, email, Number(age));
    const myResume = new Resume(myInfo);

    // Вивід на екран
    myResume.render();
}