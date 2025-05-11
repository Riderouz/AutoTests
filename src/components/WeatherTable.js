// src/components/WeatherTable.js
import React from 'react';

const WeatherTable = ({ data }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Температура</th>
                <th>Вітер</th>
                <th>Вологість</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.temperature}</td>
                <td>{data.wind}</td>
                <td>{data.humidity}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default WeatherTable;
