import { GET_AUTOCOMPLETE, UPDATE_SELECTED_LOCATION, UPDATE_SEARCH_TEXT } from '../constants'
import { getAutoComplete, updateSelectedLocation, updateSearchText } from '../actions/searchActions'

const initialState = {
    location: {
        Key: "215854",
        LocalizedName: "Tel Aviv"
    },
    locations: [{
        Key: "215854",
        LocalizedName: "Tel Aviv"
    }],
    searchText: 'Tel Aviv'
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return updateSearchText(state, action)
        case GET_AUTOCOMPLETE:
            return getAutoComplete(state, action);
        case UPDATE_SELECTED_LOCATION:
            return updateSelectedLocation(state, action);
        default:
            return state;
    }
}

export default searchReducer;