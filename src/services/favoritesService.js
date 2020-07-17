import { loadFromStorage } from './utilsService'

export const getInitialFavrites = () => {
    const storageData = loadFromStorage()
    return (storageData && storageData.favorites) ? storageData.favorites : []
}

export const checkIsFavorite = (key, favorites) => {
    if (!favorites) return false;
    return Boolean(favorites.find(favorite => favorite && favorite.Key === key))
}

export const buildFavorite = data => {
    const { location, cityBrief } = data;
    if (!location || !cityBrief) return null;
    const { Temperature, WeatherText, WeatherIcon } = cityBrief;
    const { Key, LocalizedName } = location;
    return {
        Key,
        WeatherText,
        Temperature,
        LocalizedName,
        WeatherIcon
    }
}