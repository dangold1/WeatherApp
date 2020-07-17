import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore  } from 'react-redux';

import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { getCurrentWeatherByLocation, getWeatherIcon } from '../../../services/weatherService';
import { dispatchAutoCompleteData, updateSelectedLocation, dispatchUpdateSearchText } from '../../../store/dispatches/autoCompleteDispatch';
import { dispatchForecastData, dispatchCurrentWeatherData, } from '../../../store/dispatches/weatherDispatch';
import { copy } from '../../../services/utilsService';
import './FavoriteCity.css';

const useStyles = makeStyles((theme) => ({
    card: {
        color: theme.palette.text.primary,
        marginBottom: '20px'
    },
    link: {
        textDecoration: 'none',
    },
}));

const FavoriteCity = props => {
    const [favorite, setFavorite] = useState(props.favorite);
    const [error, setError] = useState(false);
    const { unit } = useSelector(state => state.weatherState)
    let { locations } = useSelector(state => state.searchState)
    const store = useStore()

    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => { didMount() }, []);

    const didMount = async () => {
        const cBrief = await getCurrentWeatherByLocation(favorite);
        if(!cBrief) return setError(true);
        const { Temperature } = cBrief[0];

        setFavorite(prev => {
            prev = copy(prev)
            prev.Temperature = Temperature
            return prev
        })
        setError(false)
    }

    const getTemperatureUnit = () => {
        if (!favorite) return;
        const cTemperature = favorite.Temperature.Metric.Value + '°c';
        const fTemperature = favorite.Temperature.Imperial.Value + '°f';
        return unit === 'C' ? cTemperature : fTemperature;
    }

    const updateLocationsFromStore = () => {
        const state = store.getState()
        locations = state.searchState.locations
    }

    const handleChange = async () => {
        if (!favorite) return;
        dispatch(dispatchUpdateSearchText(favorite.LocalizedName));
        await dispatch(dispatchAutoCompleteData(favorite.LocalizedName));
        updateLocationsFromStore();
        const locationData = geLocationByName(favorite.LocalizedName)
        if (!locationData) return;
        dispatch(updateSelectedLocation(locationData));
        dispatch(dispatchForecastData(locationData, unit));
        dispatch(dispatchCurrentWeatherData(locationData));
    }

    const geLocationByName = locName => locations.find(loc => loc.LocalizedName === locName)

    if(error) return (
        <div>Sorry but were having a Network error plese try again later</div>
    )
    return (
        <Link className={classes.link} to="/home">
            <Card className={classes.card}>
                <CardActionArea onClick={handleChange}>
                    <CardContent className="weather-card-content">
                        <span>{favorite ? favorite.LocalizedName : ''}</span>
                        <span>{favorite ? getTemperatureUnit() : ''}</span>
                        <img src={favorite ? getWeatherIcon(favorite.WeatherIcon) : ''} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}


export default FavoriteCity;