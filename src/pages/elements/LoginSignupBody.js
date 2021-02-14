import {Link} from 'react-router-dom' 
 
function LoginSignupBody(props) {
    return ( 
        <div className="body"> 
            <div className="divider"> 
                <h2 className="heading">Create an account to start playing!</h2> 
                <div className="content"> 
                    <Link to="/signUp" className="button item">Sign Up!</Link> 
                </div> 
            </div> 
            <div className="divider"> 
                <h2 className="heading">Login to an existing account</h2> 
                <div className="content"> 
                    <label >Your Name</label> 
                    <input onChange={props.handleInput} className="item" type="text" name="name" placeholder="Name..." /> 
                    <label >Your Password</label> 
                    <input onChange={props.handleInput} className="item" type="password" name="password" placeholder="Password..." /> 
                    <Link to="/myProfile" onClick={props.handleInput} className="loginSignupButton item" name="login">Login</Link>
                </div> 
            </div> 
		</div> 
    ) 
} 
 
export default LoginSignupBody