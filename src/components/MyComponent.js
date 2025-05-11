// src/components/MyComponent.js
import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';

const MyComponent = () => {
    const [selectedCities, setSelectedCities, messageReducer] = useContext(MyContext);

    return (
        <div>
            <h1>Selected Cities</h1>
            <ul>
                {selectedCities.map(city => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
            <p>{messageReducer}</p>
        </div>
    );
};

export default MyComponent;
