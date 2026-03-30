"use strict";

const resultDiv = document.getElementById("result");
const pokeInput = document.getElementById("pokeInput");
const searchBtn = document.getElementById("searchBtn");

// Функція для отримання даних про покемона
async function getPokemon(name) {
    try {
        resultDiv.innerHTML = "Завантаження...";
        
        // Використовуємо fetch для отримання даних
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        
        if (!response.ok) throw new Error("Покемона не знайдено!");

        const data = await response.json();
        
        // Відображаємо дані
        resultDiv.innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Вага: ${data.weight}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

searchBtn.addEventListener("click", () => {
    getPokemon(pokeInput.value);
});