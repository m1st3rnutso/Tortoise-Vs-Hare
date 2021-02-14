import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import LoginSignupBody from "./elements/LoginSignupBody"

const PAGE_HEADING = "Signup or Login"

function SignupLogin(props) {
    return (
        <div className="content">
            <Header />
            <div className="woodBackground">
                <NavigationBar heading={PAGE_HEADING}/>
                <LoginSignupBody handleInput={props.handleInput} state={props.state}/>
            </div>
        </div>
    )
}

export default SignupLogin