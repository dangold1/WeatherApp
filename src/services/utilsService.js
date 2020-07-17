const STORAGE_KEY = 'FAVORATES_WEATHER_APP';
const moment = require('moment');


export const loadFromStorage = () => JSON.parse(localStorage.getItem(STORAGE_KEY))
export const saveToStorage = ({ key = 'favorites', data }) => {
    const storageData = loadFromStorage() || {}
    storageData[key] = data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}
export const getInitialTheme = () => {
    const storageData = loadFromStorage() || {};
    const { theme } = storageData
    if (!theme || theme !== 'light' && theme !== 'dark') return 'light';
    return theme;
}

export const capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase();
export const copy = data => JSON.parse(JSON.stringify(data))
export const getDay = date => moment(date).format('dddd')