// src/functions/cities.js
const cities = ['Kyiv', 'Lviv', 'Odesa', 'Dnipro'];

function searchCity(name) {
    return cities.includes(name);
}

function addCity(name) {
    return name;
}

module.exports = { searchCity, addCity };
