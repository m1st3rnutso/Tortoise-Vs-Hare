import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import AboutBody from "./elements/AboutBody"

const PAGE_HEADING = "About the Game"

class About extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="content">
                <Header />
                <div className="woodBackground">
                    <NavigationBar heading={PAGE_HEADING}/>
                    <AboutBody />
                </div>
            </div>
        )
    }
}

export default About