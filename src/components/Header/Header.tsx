import { Link } from "react-router-dom";
import { useState } from "react";
import routerConstants from "@common/routerConstants";
import './header.css';

export default function Header() {
    const [activePath, setActivePath] = useState("/");
    const [hideNav, setHideNav] = useState(true);

    return (
        <header className="header container">
            <nav>     
                <div className="menu">
                    <label htmlFor="check">
                        <input type="checkbox" className="fake-input" id="check"/>                    
                        <span className="material-symbols-outlined menu-symbol" onClick={() => setHideNav(!hideNav)}>menu</span>
                    </label>                    
                </div>                          
                <ul className={hideNav ? "nav-list hidden" : "nav-list"}>
                    <li className={activePath === "/" ? "active" : ""}>
                        <Link to={routerConstants.home} className="link-style" onClick={() => setActivePath("/")}>Home</Link>                        
                    </li>
                    <li className={activePath === routerConstants.survivalMission ? "survival-mission active" : "survival-mission"}>
                        <Link to={routerConstants.survivalMission} className="link-style disabled"
                                onClick={() => setActivePath("/survival-mission")}>Challeng - survive!</Link>
                        <div className="nav-tooltip">landing soon!</div>
                    </li>
                    <li className={activePath === routerConstants.spaceQuiz ? "space-quiz active" : "space-quiz "}>
                        <Link to={routerConstants.spaceQuiz} className="link-style disabled"
                                onClick={() => setActivePath("space-quiz")}>Space Quiz</Link>
                        <div className="nav-tooltip">landing soon!</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}