import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import SignUpBody from "./elements/SignUpBody"

const PAGE_HEADING = "New Account"

function SignupLogin(props) {
    return (
        <div className="content">
            <Header />
            <div className="woodBackground">
                <NavigationBar heading={PAGE_HEADING}/>
                <SignUpBody handleInput={props.handleInput} state={props.state}/>
            </div>
        </div>
    )
}

export default SignupLogin