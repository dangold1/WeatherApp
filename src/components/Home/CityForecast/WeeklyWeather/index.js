import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DayWeather from './DayWeather';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        paddingBottom: '35px',
    },
}));


const WeeklyWeather = props => {
    const weatherState = useSelector(state => state.weatherState)
    const forecasts = props.forecasts || weatherState.forecasts
    const classes = useStyles();

    return (
        <Grid className={classes.root} container spacing={3}>
            {
                forecasts.map((forecast, i ) => (
                    <Grid item xs={12} md={2} key={i}>
                        <DayWeather forecast={forecast} key={i}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}


export default WeeklyWeather;