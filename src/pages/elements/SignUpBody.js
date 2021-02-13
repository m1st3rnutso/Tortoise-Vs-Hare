import {Link} from 'react-router-dom' 
 
function LoginSignupBody() { 
    return ( 
        <div className="body"> 
            <div className="divider"> 
                <h2 className="heading">Your details</h2> 
                <div className="content"> 
                    <label>Your Name</label> 
                    <input type="text" className="item" name="name" placeholder="Your name..." /> 
 
                    <label>Your Password</label> 
                    <input type="password" className="item" name="password" placeholder="Password..." /> 
 
                    <label>Year Level</label> 
                    <div id="year-level"> 
                        <select id="year" className="item"> 
                            <option value="6">6</option> 
                            <option value="7">7</option> 
                            <option value="8">8</option> 
                            <option value="9">9</option> 
                            <option value="10">10</option> 
                        </select> 
                    </div> 
                </div> 
            </div> 
            <div className="divider"> 
                <h2 className="heading">Click to change your tortoise</h2> 
            </div> 
		</div> 
    ) 
} 
 
export default LoginSignupBody