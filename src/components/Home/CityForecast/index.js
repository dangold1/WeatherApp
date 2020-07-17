import React, { useState, useEffect, Fragment } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useSelector, useDispatch } from 'react-redux';
import CityBrief from './CityBrief';
import WeeklyWeather from './WeeklyWeather';
import { checkIsFavorite, buildFavorite } from '../../../services/favoritesService'
import { dispatchAddFavorites, dispatchRemoveFavorites } from '../../../store/dispatches/favoritesDispatch'
import './CityForecast.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '20px',
        width: '100%'
    },
    caption: {
        marginTop: '50px',
        marginBottom: '50px'
    }
}));


const CityForecast = props => {
    const cityBrief = useSelector(state => state.weatherState.cityBrief)
    const location = useSelector(state => state.searchState.location)
    const favorites = useSelector(state => state.favState.favorites)

    const getKey = () => location ? location.Key : null
    const getIsFavorite = () => {
        const key = getKey()
        const res = key ? checkIsFavorite(key, favorites) : false
        return res;
    }
    const [isFavorite, setIsFavorite] = useState(getIsFavorite())
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        const newState = getIsFavorite()
        setIsFavorite(newState)
    }, [favorites, location])


    const toggleFavorite = () => {
        const key = getKey()
        let action;
        if (!getIsFavorite()) {
            const favorite = buildFavorite({ cityBrief, location })
            if (!favorite) return;
            action = dispatchAddFavorites(favorite)
        } else {
            action = dispatchRemoveFavorites(key)
        }
        dispatch(action)
    }

    const control = (
        <Checkbox
            checked={isFavorite}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="like-button"
        />
    )

    return (
        <section className="city-forecast">
            {
                (!cityBrief || !location) ?
                    <div>Sorry but were having a Network error plese try again later</div>
                    : <Card className={classes.card}>
                        <div className="forecast-header">
                            <CityBrief />
                            <FormControlLabel
                                control={control}
                                onChange={toggleFavorite}
                                label={<Typography variant="overline" display="inline" gutterBottom>ADD TO FAVORITES</Typography>}
                            />
                        </div>
                        <Typography variant="h3" className={classes.caption}>{cityBrief.WeatherText}</Typography>
                        <WeeklyWeather />
                    </Card>
            }
        </section>
    )
}

export default CityForecast;
