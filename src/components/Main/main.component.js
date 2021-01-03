import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'

import useClasses from './style'

const MainComponent = () => {

    const classes = useClasses();

    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader="Powerd by Speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}}> 
                {/* InfoCard */}
                Try saying : Add incme for $100 in Category Salary for Monday..
                </Typography>
                <Divider/>
                {/* Form */}
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MainComponent
