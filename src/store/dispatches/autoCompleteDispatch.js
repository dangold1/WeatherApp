import { GET_AUTOCOMPLETE, UPDATE_SELECTED_LOCATION, UPDATE_SEARCH_TEXT } from '../constants'
import { autoCompleteByLocation } from '../../services/weatherService'

export const dispatchAutoCompleteData = locationName => async dispatch => {
    const locations = await autoCompleteByLocation(locationName)
    await dispatch({ type: GET_AUTOCOMPLETE, locations })
}

export const updateSelectedLocation = location => ({ type: UPDATE_SELECTED_LOCATION, location })

export const dispatchUpdateSearchText = searchText => ({ type: UPDATE_SEARCH_TEXT, searchText })