import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "haze",
        humidity: 60,
        feelsLike: 24.08,
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}