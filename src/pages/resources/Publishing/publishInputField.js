function publishInputField(props) {
    return (
        <div className="inputField">
            <form className="memeTextEntryForm">
                <input
                    type="text"
                    onChange={props.handleInput}
                    value={props.data.topText}
                    placeholder="Top Text Here"
                    name="topText"
                ></input>
                <input
                    type="text"
                    onChange={props.handleInput}
                    value={props.data.bottomText}
                    placeholder="Bottom Text Here"
                    name="bottomText"
                ></input>
            </form>
            <button onClick={props.handleInput} type="button">Generate Meme</button>
        </div>
    )
}

export default publishInputField