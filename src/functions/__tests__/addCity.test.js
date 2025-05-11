// src/functions/__tests__/addCity.test.js
const { addCity } = require('../cities');

test('Додавання нового міста до списку', () => {
    const city = 'Kharkiv';
    expect(addCity(city)).toBe(city);  // Перевіряємо, що додане місто відповідає тому, що передали
});
