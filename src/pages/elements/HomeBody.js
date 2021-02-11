import {Link} from 'react-router-dom'

function HomeBody() {
    return (
        <div className="body">
            <div className="divider">
                <h2 className="heading">What is this game?</h2>
                <div className="content">
                    <a className="button">
                        <Link to="/about">About</Link>
                    </a>
                </div>
            </div>
            <div className="divider">
                <h2 className="heading">Hop in and play!</h2>
                <div className="content">
                    <a href="about.html" className="button">Play!</a>
                </div>
            </div>
            <div className="divider">
                <h2 className="heading">Learn how to play!</h2>
                <div className="content">
                    <a href="about.html" className="button">Tutorial</a>
                </div>
            </div>
		</div>
    )
}

export default HomeBody