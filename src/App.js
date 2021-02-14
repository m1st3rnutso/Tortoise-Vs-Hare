import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import MyProfile from "./pages/MyProfile"
import SignupLogin from "./pages/SignupLogin"
import SignUp from "./pages/SignUp"

import Tortoises from "./pages/resources/Tortoises"
const NUMBER_OF_TORTOISES=Tortoises.length

const INITIAL_STATE={
  loggedIn: false,
  tortoise: Tortoises[0],
  name: "",
  password: "",
  yearLevel: ""
}

class App extends React.Component {
  constructor() {
    super()
    this.state=INITIAL_STATE
  }

  handleInput = (event) => {
    const eventTargetName = event.target.name
    this.setState((previousState) => {
      if (eventTargetName === "tortoise") {
        const previousTortoisIndex = previousState.tortoise.index
        return {
          [eventTargetName]: previousTortoisIndex + 1 < NUMBER_OF_TORTOISES ? 
          Tortoises[previousTortoisIndex + 1] : 
          Tortoises[0]
        }
      } else if (eventTargetName === "signUp") {
        // TODO: database insert
        return {loggedIn: true}
      } else if (eventTargetName === "login") {
        // TODO: database update
        return {loggedIn: true}
      } else if (eventTargetName === "logout") {
        // TODO: database update
        return INITIAL_STATE
      } else {
        return {[eventTargetName]: event.target.value}
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
              <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/myProfile" exact>
            {this.state.loggedIn ? 
            <MyProfile handleInput={this.handleInput} state={this.state}/> : 
            <SignupLogin handleInput={this.handleInput} state={this.state}/>}
          </Route>
          <Route path="/signUp" exact>
            {this.state.loggedIn ? 
            <MyProfile handleInput={this.handleInput} state={this.state}/> : 
            <SignUp handleInput={this.handleInput} state={this.state}/>}
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

  export default App