import apiKey from '../API_KEY';

export const autoCompleteByLocation = async location => {
    try {
        const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${location}`;
        const response = await fetch(url);
        let autocompleteData = await response.json();
        return autocompleteData;

    } catch (err) {
        console.log({ err });
        return []
    }
}

export const getCurrentWeatherByLocation = async location => {
    try {
        const url = `https://dataservice.accuweather.com/currentconditions/v1/${location.Key}?apikey=${apiKey}`;
        const response = await fetch(url);
        let weatherData = await response.json();
        return weatherData;

    } catch (err) {
        console.log({ err });
        return null
    }
}

export const getForecastsByLocation = async (location, temperatureType = 'C') => {
    try {
        let tempBy = temperatureType === 'C' ? '&metric=true' : '';
        const url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.Key}?apikey=${apiKey}${tempBy}`;
        const response = await fetch(url);
        let forecastsData = await response.json();
        return forecastsData;
    } catch (err) {
        console.log({ err });
        return null
    }
}

export const getWeatherIcon = iconNumeric => {
    if (!iconNumeric) return null
    if (iconNumeric < 10) iconNumeric = '0' + iconNumeric;
    return `https://developer.accuweather.com/sites/default/files/${iconNumeric}-s.png`;
}
