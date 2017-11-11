import React from 'react'
import { BrowserRouter, hashHistory, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

class App extends React.Component{
  render(){
    return (
      <BrowserRouter history={hashHistory}>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
