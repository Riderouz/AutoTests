// src/functions/__tests__/weatherData.test.js
import { render, screen } from '@testing-library/react';
import WeatherTable from '../../components/WeatherTable'; // замініть на правильний компонент, якщо потрібно
import '@testing-library/jest-dom';

test('Перевірка відображення погодних даних', async () => {
    // Мокаємо дані про погоду
    const weatherData = {
        temperature: '22°C',
        wind: '15 km/h',
        humidity: '60%',
    };

    // Рендеримо компонент, який має відображати таблицю з погодою
    render(<WeatherTable data={weatherData} />);

    // Перевіряємо, чи всі елементи відображаються
    expect(screen.getByText(/22°C/i)).toBeInTheDocument(); // Перевірка температури
    expect(screen.getByText(/15 km\/h/i)).toBeInTheDocument(); // Перевірка швидкості вітру
    expect(screen.getByText(/60%/i)).toBeInTheDocument(); // Перевірка вологості
});
