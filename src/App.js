import React from 'react'
import { Grid } from '@material-ui/core'
// Details
import Details from './components/Details/details.component';

import useStyles from './styles'

const App = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={4}>
        <Details title="Income"/>
      </Grid>
      <Grid item xs={12} sm={4}>
        MAIN
      </Grid>
      <Grid item xs={12} sm={4}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  )
}

export default App
