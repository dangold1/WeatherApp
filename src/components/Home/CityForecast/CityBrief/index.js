import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getWeatherIcon } from '../../../../services/weatherService';
import './CityBrief.css';

const CityBrief = () => {
    const { cityBrief, unit } = useSelector(state => state.weatherState)
    const location = useSelector(state => state.searchState.location)

    const getTemperatureUnit = () => {
        if (!cityBrief) return;
        const cTemperature = cityBrief.Temperature.Metric.Value + '°c';
        const fTemperature = cityBrief.Temperature.Imperial.Value + '°f';
        return unit === 'C' ? cTemperature : fTemperature;
    }

    return (
        <div className="weather-card-content">
            <img src={cityBrief? getWeatherIcon(cityBrief.WeatherIcon):''}></img>
            <div className="weather-text">
                <span>{location ? location.LocalizedName : ''}</span>
                <span>{getTemperatureUnit()}</span>
            </div>
        </div>
    )
}


export default CityBrief;