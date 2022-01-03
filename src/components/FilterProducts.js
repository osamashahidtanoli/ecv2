import classes from '../pages/Pages.module.css';
import { Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
const FilterProducts = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={classes.filterDiv}>
            <div className={classes.catGrid}>
                <div>
                    <TextField fullWidth label='Name of Product' variant='outlined' type='text' />
                </div>
                <div>
                   
                   
                    <Select
                    fullWidth
                        variant='outlined'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        label='Categories'
                        
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                   
                </div>
                <div>
                    <TextField fullWidth variant='outlined' label='Price'></TextField>
                </div>
                <div style={{alignSelf: 'center'}}>
                    <Button fullWidth color='primary' variant='contained'>Clear Filters</Button>
                </div>
            </div>
        </div>
    )
}


export default FilterProducts
