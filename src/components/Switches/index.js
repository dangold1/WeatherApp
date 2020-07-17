import React, { useEffect } from 'react';
import { dispatchToggleTheme } from '../../store/dispatches/mainDispatch'
import { toggleUnit, dispatchForecastData } from '../../store/dispatches/weatherDispatch'
import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from '../../services/utilsService'
import Switch from './Switch';
import './switches.css'



const Switches = props => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.mainState.theme)
    const unit = useSelector(state => state.weatherState.unit)
    const location = useSelector(state => state.searchState.location)

    useEffect(() => { loadForcasts() }, [unit])

    const themeChange = () => dispatch(dispatchToggleTheme())
    const unitChange = () => dispatch(toggleUnit())
    const loadForcasts = () => dispatch(dispatchForecastData(location, unit))


    return (
        <div className='switches-box'>
            <Switch onChange={themeChange} label={`Theme: ${capitalize(theme)}`} />
            <Switch onChange={unitChange} label={`Unit: °${unit}`} />
        </div>
    );
}

export default Switches