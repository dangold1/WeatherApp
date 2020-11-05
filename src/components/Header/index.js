import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '62px'
    },
    title: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1),
        textDecoration: 'none',
    },
    iconButton: {
        color:"#ffffff"
    }
}));


const Header = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Forecast Weather App</Typography>
                    <Link className={classes.link} to="/">
                        <Tooltip title="Home">
                            <IconButton className={classes.iconButton}><HomeIcon /></IconButton>
                        </Tooltip>
                    </Link>
                    <Link className={classes.link} to="/favorites">
                        <Tooltip title="Favorites">
                            <IconButton className={classes.iconButton}><FavoriteIcon /></IconButton>
                        </Tooltip>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
