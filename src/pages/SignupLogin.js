import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import LoginSignupBody from "./elements/LoginSignupBody"

const PAGE_HEADING = "Signup or Login"

class SignupLogin extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="content">
                <Header />
                <div className="woodBackground">
                    <NavigationBar heading={PAGE_HEADING}/>
                    <LoginSignupBody />
                </div>
            </div>
        )
    }
}

export default SignupLogin