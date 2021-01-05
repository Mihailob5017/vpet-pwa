import React from 'react'
import { Grid } from '@material-ui/core'
// Details
import Details from './components/Details/details.component';
import Main from './components/Main/main.component'
import useStyles from './styles'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui"
const App = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.grid} spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>

    </div>
  )
}

export default App
