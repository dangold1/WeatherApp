import apiKey from '../API_KEY';

export const getCurrentLocationData = async loc => {
    try {
        const { latitude, longitude } = loc.coords;
        if(!latitude || !longitude) return;
        const latLangString = `${latitude},${longitude}`;
        const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latLangString}`;
        const response = await fetch(url);
        const positionData = await response.json();
        return positionData;
    } catch (err) {
        console.log({ err });
    }
}

export const getLocation = () => new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve);
    } else {
        reject('GeoLocation is not supported')
    }
})