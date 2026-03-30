"use strict";

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
let allMovies = []; // Сюди збережемо всі фільми


async function fetchMovies() {
    try {
        const response = await fetch("https://api.tvmaze.com/shows");
        allMovies = await response.json();
        renderMovies(allMovies);
    } catch (error) {
        movieGrid.innerHTML = `<p>Помилка завантаження даних.</p>`;
    }
}


function renderMovies(movies) {
    movieGrid.innerHTML = "";
    movies.forEach(({ name, image, rating }) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${image?.medium}" alt="${name}" width="100%">
            <h3>${name}</h3>
            <p>Рейтинг: ${rating?.average || 'N/A'}</p>
        `;
        movieGrid.appendChild(card);
    });
}


searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allMovies.filter(m => m.name.toLowerCase().includes(term));
    renderMovies(filtered);
});

fetchMovies();