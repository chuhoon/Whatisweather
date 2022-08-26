import React, { useEffect, useState } from 'react';
import WeatherPage from './screen/WeatherPage';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');
    const cities = [
        ['현재위치', '현재위치'],
        ['Seoul', '서울'],
        ['Busan', '부산'],
        ['Sokcho', '속초'],
        ['Gangneung', '강릉'],
        ['Chuncheon', '춘천'],
        ['Yeosu', '여수'],
        ['Jeju', '제주'],
    ];

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherCurrentLocation(lat, lon);
        });
    };

    // await 사용시 함수가 비동기(async)여야함
    const getWeatherCurrentLocation = async (lat, lon) => {
        const res = await axios(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae7ce94f891931386ffcf938370d25dc&units=metric&lang=kr`
        );
        setWeather(res.data);
        // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae7ce94f891931386ffcf938370d25dc&units=metric&lang=kr`;
        // let res = await fetch(url);
        // let data = await res.json();
        // setWeather(data);
    };

    const getWeatherCity = async () => {
        const res = await axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae7ce94f891931386ffcf938370d25dc&units=metric&lang=kr`
        );
        setWeather(res.data);
        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae7ce94f891931386ffcf938370d25dc&units=metric&lang=kr`;
        // let res = await fetch(url);
        // let data = await res.json();
        // setWeather(data);
    };

    useEffect(() => {
        if (city === '' || city === '현재위치') {
            getCurrentLocation();
        } else {
            getWeatherCity();
        }
    }, [city]);

    return (
        <React.Fragment>
            <GlobalStyle />
            <WeatherPage weather={weather} cities={cities} setCity={setCity} />
        </React.Fragment>
    );
}

export default App;
