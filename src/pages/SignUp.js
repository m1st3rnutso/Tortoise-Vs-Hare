import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import SignUpBody from "./elements/SignUpBody"

const PAGE_HEADING = "New Account"

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
                    <SignUpBody />
                </div>
            </div>
        )
    }
}

export default SignupLogin