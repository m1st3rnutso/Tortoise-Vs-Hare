function publishMeme(topText, bottomText, randomMemeImage) {
    return (<div className="meme">
        <img src={randomMemeImage.url}/>
        <h1 className="topText">{topText}</h1>
        <h2 className="bottomText">{bottomText}</h2>
    </div>)
}

export default publishMeme