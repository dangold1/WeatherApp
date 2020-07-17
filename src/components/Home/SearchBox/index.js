import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { dispatchAutoCompleteData, updateSelectedLocation, dispatchUpdateSearchText } from '../../../store/dispatches/autoCompleteDispatch';
import { dispatchForecastData, dispatchCurrentWeatherData } from '../../../store/dispatches/weatherDispatch';
import { getLocation, getCurrentLocationData } from '../../../services/locationService';

const SearchBox = () => {
    let { locations, searchText } = useSelector(state => state.searchState)
    const { unit } = useSelector(state => state.weatherState)
    const store = useStore();
    const dispatch = useDispatch();

    useEffect(() => { didMount() }, []);

    const didMount = () => {
        setDefaultLocation();
    }

    const updateLocationsFromStore = () => {
        const state = store.getState();
        locations = state.searchState.locations;
    }

    const setDefaultLocation = async () => {
        try {
            let result = await getLocation();
            let positionData = await getCurrentLocationData(result);
            const { LocalizedName } = positionData;
            dispatch(dispatchUpdateSearchText(LocalizedName))
            await dispatch(dispatchAutoCompleteData(LocalizedName));
            updateLocationsFromStore();
            const locationData = getLocationByName(LocalizedName)
            if (!locationData) return;
            dispatch(updateSelectedLocation(locationData));
            dispatch(dispatchForecastData(locationData, unit));
            dispatch(dispatchCurrentWeatherData(locationData));
        } catch (err) {
            console.log({ err })
        }
    }

    const handleChange = event => {
        const { value } = event.target;
        if (!value) return;
        dispatch(dispatchUpdateSearchText(value));
        dispatch(dispatchAutoCompleteData(value));
    }

    const handleSelect = locName => {
        if (!locName) return;
        const locationData = getLocationByName(locName)
        if (!locationData) return;
        dispatch(updateSelectedLocation(locationData));
        dispatch(dispatchForecastData(locationData, unit));
        dispatch(dispatchCurrentWeatherData(locationData));
    }

    const getLocationByName = locName => locations.find(loc => loc.LocalizedName === locName)

    return (
        <Autocomplete
            style={{ width: 300 }}
            freeSolo
            id="city_search_box"
            disableClearable
            onChange={(_, locName) => handleSelect(locName)}
            options={locations.map(loc => loc.LocalizedName)}
            value={searchText}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search City"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    value={searchText}
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                    }}
                />
            )}
        />
    );
}

export default SearchBox;