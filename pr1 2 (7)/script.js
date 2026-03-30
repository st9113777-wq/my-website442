"use strict";

const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

function render() {
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        
        li.onclick = () => {
            tasks.splice(index, 1);
            saveAndRender();
        };
        list.appendChild(li);
    });
}

function saveAndRender() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    render();
}

btn.onclick = () => {
    if (input.value) {
        tasks.push(input.value);
        input.value = "";
        saveAndRender();
    }
};

render(); 