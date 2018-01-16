'use strict';

import axios from 'axios';

const API_KEY = '9293c4b15bfae165847567d9f6a3c2ec';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}?q=${city},us`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}