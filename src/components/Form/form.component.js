import React from 'react'

import { TextField, Typography, Grid, Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import useStyles from './style'



const FormComponent = () => {

    const classes = useStyles()



    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>...</Typography>
            </Grid>

            <Grid item xs={6}>

                {/* Plus or minus */}
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {/* Type of expense */}
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value='business'>Business</MenuItem>
                        <MenuItem value='salary'>Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {/* Mony number */}
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth />
            </Grid>

            {/* Date */}
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth />
            </Grid>

            <Button variant="outlined" color="primary" className={classes.button} fullWidth>Create</Button>



        </Grid>
    )
}

export default FormComponent
