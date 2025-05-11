const { addCity } = require('../cities');

test('Додавання міста до таблиці', () => {
    const result = addCity('Lviv');
    expect(result).toContain('Lviv');
});
