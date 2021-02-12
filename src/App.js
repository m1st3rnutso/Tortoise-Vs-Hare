import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import MyProfile from "./pages/MyProfile"
import SignupLogin from "./pages/SignupLogin"
import SignUp from "./pages/SignUp"

class App extends React.Component {
  constructor() {
    super()
    this.state={
      loggedIn: false
    }
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
            {this.state.loggedIn ? <MyProfile /> : <SignupLogin />}
          </Route>
          <Route path="/signUp" exact>
            {this.state.loggedIn ? <MyProfile /> : <SignUp />}
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