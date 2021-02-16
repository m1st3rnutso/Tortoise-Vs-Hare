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
  yearLevel: 6,
  progressLevel: 0,
  loggingIn: false,
  creatingAccount: false
}

class App extends React.Component {
  constructor() {
    super()
    this.state=INITIAL_STATE
  }

  async loginAttempt(name, password) { 
    return await fetch("http://localhost:3001/loginAttempt", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, password})
  })
  .then(async function(response) {
      return response.json()
  })
  }

  async createAccountAttempt(name, password, yearLevel, tortoise) { 
    return await fetch("http://localhost:3001/createAccountAttempt", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, password, yearLevel, tortoise})
  })
  .then(async function(response) {
      return response.status
  })
  }

  async databaseRequest() {
    if (this.state.loggingIn) { 
      const data = (await this.loginAttempt(this.state.name, this.state.password))[0]
      if (data) { 
        this.setState(() => {
          return {
            loggedIn: true,
            tortoise: Tortoises[data.tortoise],
            name: data.name,
            yearLevel: data.yearLevel,
            progressLevel: data.progressLevel
          }
        })
      } else {
        console.log("Incorrect Credentials")
      }
      this.setState(() => {
        return {loggingIn: false}
      })
    } else if (this.state.creatingAccount) {
      const status = (await this.createAccountAttempt(
        this.state.name, 
        this.state.password, 
        this.state.yearLevel, 
        this.state.tortoise.index)
      )
      if (status === 201) {
        this.setState(() => {
          return {
            loggedIn: true
          }
        })
      } else {
        console.log(`Unable to create account: ${this.state.name}`)
      }
      this.setState(() => {
        return {creatingAccount: false}
      })
    }
  }

  handleInput = (event) => {
    const eventTargetName = event.target.name
    const eventTargetValue = event.target.value
    this.setState( (previousState) => {
      if (eventTargetName === "tortoise") {
        const previousTortoisIndex = previousState.tortoise.index
        return {
          [eventTargetName]: previousTortoisIndex + 1 < NUMBER_OF_TORTOISES ? 
          Tortoises[previousTortoisIndex + 1] : 
          Tortoises[0]
        }
      } else if (eventTargetName === "signUp") {
        return {creatingAccount: true}
      } else if (eventTargetName === "login") {
        return {loggingIn: true}
      } else if (eventTargetName === "logout") {
        return INITIAL_STATE
      } else {
        return {[eventTargetName]: eventTargetValue}
      }
    }, async() => {
      this.databaseRequest()
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