function MyProfileBody(props) { 
    return ( 
        <div className="body"> 
            <div className="divider"> 
                <h2 className="heading">Your details</h2> 
                <div className="content"> 
                    <label>Your Name</label> 
                    <input
                        type="text" 
                        className="item" 
                        readOnly
                        value={props.state.name}
                    />
                    <label>Progress Level</label> 
                    <input
                        type="text" 
                        className="item" 
                        readOnly
                        value={props.state.progressLevel}
                    />
                    <label>Year Level</label>  
                    <input 
                        name="yearLevel" 
                        className="item"
                        readOnly
                        value={props.state.yearLevel}
                    ></input> 
                </div> 
            </div> 
            <div className="divider"> 
                <h2 className="heading">Your tortoise</h2> 
                <div className="content"> 
                    <img src={props.state.tortoise.source} alt="tortoise" className="character item"/>
                </div>
            </div> 
		</div> 
    ) 
} 
 
export default MyProfileBody