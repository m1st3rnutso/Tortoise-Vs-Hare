import {Link} from 'react-router-dom'

function HomeBody() {
    return (
        <div className="body">
            <div className="divider">
                <h2 className="heading">What is this game?</h2>
                <div className="content">
                    <Link to="/about" className="button item">About</Link>
                </div>
            </div>
            <div className="divider">
                <h2 className="heading">Hop in and play!</h2>
                <div className="content">
                    <a href="about.html" className="button item">Play!</a>
                </div>
            </div>
            <div className="divider">
                <h2 className="heading">Learn how to play!</h2>
                <div className="content">
                    <a href="about.html" className="button item">Tutorial</a>
                </div>
            </div>
		</div>
    )
}

export default HomeBody