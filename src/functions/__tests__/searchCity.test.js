// src/functions/__tests__/searchCity.test.js
const { searchCity } = require('../cities');

test('Пошук міста через поле пошуку', () => {
    expect(searchCity('Kyiv')).toBe(true);
});
