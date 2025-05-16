import { NavLink, useRoutes } from "react-router";
import routes from "~react-pages"
import "../styles/componts/navbar.scss"
//navbar virker næsten helt af sig selv
//husk at downloade de 3 packs der mangler
//react-router, react-router-dom  og vite-plugin-pages 
// og put et browserRouter component rundt om alle indsatte componenter i main
//HUSk at tilføje "Pages()" til vite config filen i plugins

export default function Navbar(){
    return(
        

        <header>
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__listItem navbar__listItem--logoDiv">< NavLink className="navbar__Link" to="/" end><div className="navbar__logoDiv "><img className="navbar__logo"  src="/logo.png" alt="" srcset="" /><p className="navbar__logoText">BørneHjemmet LangeLand</p></div></NavLink></li>

                <li className="navbar__listItem"><NavLink className="navbar__Link" to="/OmOs" end>Om os</NavLink></li>
                <li className="navbar__listItem">< NavLink className="navbar__Link" to="/doner" end>Doner penge</NavLink></li>
                <li className="navbar__listItem">< NavLink className="navbar__Link" to="/settings" end>Sponsere</NavLink></li>
            </ul>
        </nav>
        
        </header>        
    
    )
}