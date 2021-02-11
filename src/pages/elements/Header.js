import {Link} from 'react-router-dom'

import Logo from "../resources/Logo.fw.png"

function Header() {
    return (
        <header className="header">
			<Link to="/"><img src={Logo} alt="Tortoise vs Hare" className="Logo"/></Link>
		</header>
    )
}

export default Header