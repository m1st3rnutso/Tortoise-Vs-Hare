function NavigationBar(props) {
    return (
        <nav className="navigationBar">
            <div className="buttonContainer">
                {props.heading !== "Main Menu" ? <a className="backButton">Back</a> : ""}
            </div>
            <div className="pageTitle">
                <h1>{props.heading}</h1>
            </div>
            <div className="buttonContainer">
                <a class="my-profile-button">My Profile</a>
            </div>
                {/* <img src="images/hare.png" alt="hare" id="navigationBarHare" /> */}
                {/* <img src="images/tortoise.png" alt="tortoise" id="navigationBarTortoise" /> */}
        </nav>
    )
}

export default NavigationBar
