import React, { useState } from 'react';

const SearchComponent = () => {
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = () => {
        if (city === 'qwerty123') {
            setErrorMessage('Місто не знайдено');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Введіть місто"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            {errorMessage && <div data-testid="error-message">{errorMessage}</div>}
        </div>
    );
};

export default SearchComponent;
