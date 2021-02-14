import {Link} from 'react-router-dom'

function NavigationBar(props) {
    return (
        <nav className="navigationBar">
            <div className="buttonContainer">
                {props.heading !== "Main Menu" ? <Link to="/home" className="button item">Back</Link> : ""}
            </div>
            <div className="pageTitle">
                <h1>{props.heading}</h1>
            </div>
            <div className="buttonContainer">
                {props.heading !== "My Profile" ? 
                <Link to="/myProfile" className="button item">My Profile</Link> : 
                <Link to="/home" onClick={props.handleInput} className="button item" name="logout">Logout</Link>}
            </div>
                {/* <img src="images/hare.png" alt="hare" id="navigationBarHare" /> */}
                {/* <img src="images/tortoise.png" alt="tortoise" id="navigationBarTortoise" /> */}
        </nav>
    )
}

export default NavigationBar
