// src/contexts/MyContextProvider.js
import React, { useState } from 'react';
import { MyContext } from './MyContext';

// Створюємо провайдер для контексту
export const MyContextProvider = ({ children }) => {
    const [selectedCities, setSelectedCities] = useState([/* дефолтні міста для тесту */]);
    const [messageReducer, setMessageReducer] = useState("");

    return (
        <MyContext.Provider value={[selectedCities, setSelectedCities, messageReducer]}>
            {children}
        </MyContext.Provider>
    );
};
