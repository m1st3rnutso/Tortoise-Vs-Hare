import {Link} from 'react-router-dom'

function SignUpBody(props) { 
    return ( 
        <div className="body"> 
            <div className="divider"> 
                <h2 className="heading">Your details</h2> 
                <div className="content"> 
                    <label>Your Name</label> 
                    <input
                        onChange={props.handleInput} 
                        type="text" 
                        className="item" 
                        name="name" 
                        placeholder="Your name..." 
                    /> 
                    <label>Your Password</label> 
                    <input 
                        onChange={props.handleInput} 
                        type="password" 
                        className="item" 
                        name="password" 
                        placeholder="Password..." 
                    /> 
                    <label>Year Level</label>  
                    <select 
                        onChange={props.handleInput} 
                        name="yearLevel"
                        className="item"> 
                        <option value="6">6</option> 
                        <option value="7">7</option> 
                        <option value="8">8</option> 
                        <option value="9">9</option> 
                        <option value="10">10</option> 
                    </select> 
                </div> 
            </div> 
            <div className="divider"> 
                <h2 className="heading">Click to change your tortoise</h2> 
                <div className="content"> 
                    <img onClick={props.handleInput} src={props.state.tortoise.source} alt="tortoise" className="character item" name="tortoise"/>
                    <Link 
                        to="/signUp" 
                        onClick={props.handleInput} 
                        className="loginSignupButton item" 
                        name="signUp">
                        {!props.state.creatingAccount ? "Create!" : "Creating..."}
                    </Link>
                </div>
            </div> 
		</div> 
    ) 
} 
 
export default SignUpBody