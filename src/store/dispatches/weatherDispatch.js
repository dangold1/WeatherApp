import { UPDATE_FORECASTS, UPDATE_CURRENT_WEATHER, TOGGLE_UNIT } from '../constants';
import { getForecastsByLocation, getCurrentWeatherByLocation } from '../../services/weatherService'

export const dispatchForecastData = (location, unit) => async (dispatch) => {
    const data = await getForecastsByLocation(location, unit);
    if (data) {
        dispatch({ type: UPDATE_FORECASTS, forecasts: data.DailyForecasts, locationName: location.LocalizedName })
    }
}

export const dispatchCurrentWeatherData = location => async (dispatch) => {
    if (!location) return;
    const data = await getCurrentWeatherByLocation(location);
    dispatch({ type: UPDATE_CURRENT_WEATHER, cityBrief: data ? data[0] : null })
}

export const toggleUnit = () => (dispatch) => {
    dispatch({ type: TOGGLE_UNIT })
}