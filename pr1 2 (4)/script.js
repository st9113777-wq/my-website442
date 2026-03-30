"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// 1. Додавання завдання
addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim(); // Використовуємо trim() для очищення пробілів

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        
        taskInput.value = ""; 
        console.log("Завдання додано:", taskText);
    } else {
        alert("Будь ласка, введіть текст завдання!");
    }
});


taskList.addEventListener("click", function(event) {
    if (event.target.nodeName === "LI") {
        console.log("Завдання видалено:", event.target.textContent);
        event.target.remove();
    }
});