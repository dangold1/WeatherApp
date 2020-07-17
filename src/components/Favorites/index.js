import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import FavoriteCity from './FavoriteCity';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginTop: '20px',
        width: '65%'
    },
    caption: {
        marginTop: '50px',
        marginBottom: '50px'
    }
}));


const Favorites = () => {
    const classes = useStyles();
    const favorites = useSelector(state => state.favState.favorites)

    return (
        <Paper elevation={0} className={classes.paper}>
            <Grid className={classes.root} container spacing={3}>
                {
                    Array.isArray(favorites) &&
                    favorites.map((favorite, i) => (
                        <Fragment key={i}>
                            {
                                favorite ?
                                <Grid item xs={12} md={2}>
                                    <FavoriteCity favorite={favorite} />
                                </Grid>
                                : null
                            }
                        </Fragment>
                    ))
                }
            </Grid>
        </Paper>
    )
}

export default Favorites;