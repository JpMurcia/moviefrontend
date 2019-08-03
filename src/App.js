import React from 'react'
import './App.css'
import Home from './scenes/Home/Home'
import Login from './scenes/Login/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
