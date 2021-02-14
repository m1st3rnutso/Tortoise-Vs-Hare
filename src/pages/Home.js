import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import HomeBody from "./elements/HomeBody"

const PAGE_HEADING = "Main Menu"

function Home() {
    return (
        <div className="content">
            <Header />
            <div className="woodBackground">
                <NavigationBar heading={PAGE_HEADING}/>
                <HomeBody />
            </div>
        </div>
    )
}

export default Home