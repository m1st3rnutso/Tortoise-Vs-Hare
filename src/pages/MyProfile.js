import React from "react"

import Header from "./elements/Header"
import NavigationBar from "./elements/NavigationBar"
import MyProfileBody from "./elements/MyProfileBody"

const PAGE_HEADING = "My Profile"

function MyProfile(props)  {
    return (
        <div className="content">
            <Header />
            <div className="woodBackground">
                <NavigationBar handleInput={props.handleInput} heading={PAGE_HEADING}/>
                <MyProfileBody state={props.state}/>
            </div>
        </div>
    )
}

export default MyProfile