import { Link } from "react-router-dom";
import { useState } from "react";
import routerConstants from "../../common/routerConstants";
import './header.css';

export default function Header() {
    const [activePath, setActivePath] = useState("/");
    const [hideNav, setHideNav] = useState(true);
    const [hoverSQ, setHoverSQ] = useState(false);
    const [hoverSM, setHoverSM] = useState(false);

    return (
        <header className="header container">
            <nav>
            <span className="material-symbols-outlined menu-symbol" onClick={() => setHideNav(!hideNav)}>menu</span>
                <ul className={hideNav ? "nav-list hidden" : "nav-list"}>
                    <li className={activePath === "/" ? "active" : ""}>
                        <Link to={routerConstants.home} className="link-style" onClick={() => setActivePath("/")}>Home</Link>                        
                    </li>
                    <li className={activePath === routerConstants.survivalMission ? "survival-mission active" : "survival-mission"} 
                        onMouseEnter={() => setHoverSM(true)} onMouseLeave={() => setHoverSM(false)}>
                        <Link to={routerConstants.survivalMission} className="link-style disabled"
                                onClick={() => setActivePath("/survival-mission")}>Challeng - survive!</Link>
                        <div className={hoverSM ? "nav-tooltip" : "hidden"}>landing soon!</div>
                    </li>
                    <li className={activePath === routerConstants.spaceQuiz ? "space-quiz active" : "space-quiz "} 
                        onMouseEnter={() => setHoverSQ(true)} onMouseLeave={() => setHoverSQ(false)}>
                        <Link to={routerConstants.spaceQuiz} className="link-style disabled"
                                onClick={() => setActivePath("space-quiz")}>Space Quiz</Link>
                        <div className={hoverSQ ? "nav-tooltip" : "hidden"}>landing soon!</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}