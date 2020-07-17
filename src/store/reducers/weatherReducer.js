import { UPDATE_FORECASTS, UPDATE_CURRENT_WEATHER, TOGGLE_UNIT } from '../constants';
import { updateForecasts, updateCurrentWeather } from '../actions/weatherAction';

const initialState = {
    forecasts: [],
    locationName: '',
    unit: 'C'
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORECASTS:
            return updateForecasts(state, action);
        case UPDATE_CURRENT_WEATHER:
            return updateCurrentWeather(state, action);
        case TOGGLE_UNIT:
            const unit = state.unit === 'C' ? 'F' : 'C'
            return { ...state, unit };
        default:
            return state
    }
}

export default weatherReducer