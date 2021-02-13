import {Link} from 'react-router-dom' 
 
function LoginSignupBody() { 
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
                    <label class="input-label">Your Name</label> 
                    <input type="text" id="name" name="name" placeholder="Name..." /> 
                    <label class="input-label">Your Password</label> 
                    <input type="password" id="password" name="password" placeholder="Password..." /> 
                    <a class="loginButton item">Login</a> 
                </div> 
            </div> 
		</div> 
    ) 
} 
 
export default LoginSignupBody