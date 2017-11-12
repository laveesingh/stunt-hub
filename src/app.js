import React from 'react'
import { BrowserRouter, hashHistory, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { purple, green, red } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
})

class App extends React.Component{
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter history={hashHistory}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
