import {Link} from 'react-router-dom'

import Tortoise from "../resources/tortoise.fw.png"
import Hare from "../resources/hare.fw.png"

function AboutBody() {
    return (
        <div className="body">
            <div className="divider">
                <h2 className="heading">The Tortoise</h2>
                <div className="content">
                    <img src={Tortoise} alt="Tortoise" className="character item"/>
                </div>
            </div>
            <div className="dividerText">
                <p>The tricky (and hare raising) Hare has challenged the Tortoise to a rematch! But this time there's a twist... The Hare offers the Tortoise two races under different conditions, what could he be up to? Help the Tortoise outsmart the Hare and choose the race that he will win!</p>
                <Link to="/tutorial" className="button item">
                    Tutorial
                </Link>
            </div>
            <div className="divider">
                <h2 className="heading">The Hare</h2>
                <div className="content">
                    <img src={Hare} alt="Hare" className="character item" />
                </div>
            </div>
		</div>
    )
}

export default AboutBody