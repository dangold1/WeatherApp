export const getAutoComplete = (state, action) => {
    return {...state, locations: action.locations}
}

export const updateSelectedLocation = (state, action) => {
    return {...state, location: action.location}
}

export const updateSearchText = (state, action) => {
    return {...state, searchText: action.searchText}
}
