export const updateForecasts = (state, action) => {
    const { forecasts, locationName } = action
    return { ...state, forecasts, locationName }
}

export const updateCurrentWeather = (state, action) => {
    return { ...state, cityBrief: action.cityBrief }
}

