import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getWeatherIcon } from '../../../../../services/weatherService';
import { getDay } from '../../../../../services/utilsService';
import './DayWeather.css';


const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        marginBottom: '20px',
        height: '85%',
    },
}));

const DayWeather = (props) => {
    const { forecast } = props;
    const { unit } = useSelector(state => state.weatherState);
    const classes = useStyles();

    const getTemperatureUnit = () => {
        if (!forecast) return;
        const { Minimum, Maximum } = forecast.Temperature
        return unit === 'C' ?
            `${Minimum.Value}°c - ${Maximum.Value}°c`
            : `${Minimum.Value}°f - ${Maximum.Value}°f`
    }

    return (
        <Card className={classes.card}>
            <div className="weather-card-content">
                <span>{forecast.Day ? getDay(forecast.Date) : ''}</span>
                <span className="temp-units">{getTemperatureUnit()}</span>
                <img src={forecast ? getWeatherIcon(forecast.Day.Icon) : ''} />
            </div>
        </Card>
    )
}


export default DayWeather;