import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchComponent = props => {
    const { onChange, label } = props
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(prevState => !prevState);
        if (onChange) onChange(checked)
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
                }
                label={label}
            />
        </FormGroup>
    );
}

export default SwitchComponent