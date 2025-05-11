// Тестовий код
import { render, screen, fireEvent } from "@testing-library/react";
import MyComponent from "../../components/MyComponent.js"; // Імпортуємо MyComponent
import { MyContextProvider } from "../../contexts/MyContextProvider"; // Імпортуємо MyContextProvider
import React, { useRef } from 'react';

const Wrapper = () => {
  return (
      <MyContextProvider>
        <MyComponent setCitiesOnMap={jest.fn()} useAutoSelection={useRef(false)} />
      </MyContextProvider>
  );
};

test('should show error message when searching for a non-existing city', () => {
  render(<Wrapper />);

  const input = screen.getByPlaceholderText(/type the name of city/i);
  const searchIcon = screen.getByRole("img");

  // Вводимо неправильне ім'я міста
  fireEvent.change(input, { target: { value: "non-existing city" } });
  fireEvent.click(searchIcon);

  // Перевірка, чи з'являється повідомлення про помилку
  expect(screen.getByText(/city not found/i)).toBeInTheDocument();
});
