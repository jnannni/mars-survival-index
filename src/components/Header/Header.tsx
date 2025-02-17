import { Link } from "react-router-dom";
import './header.css';
import { useState } from "react";

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
                        <Link to="/" className="link-style" onClick={() => setActivePath("/")}>Home</Link>                        
                    </li>
                    <li className={activePath === "/survival-mission" ? "survival-mission active" : "survival-mission"} 
                        onMouseEnter={() => setHoverSM(true)} onMouseLeave={() => setHoverSM(false)}>
                        <Link to="/survival-mission" className="link-style disabled"
                                onClick={() => setActivePath("/survival-mission")}>Challeng - survive!</Link>
                        <div className={hoverSM ? "nav-tooltip" : "hidden"}>landing soon!</div>
                    </li>
                    <li className={activePath === "/space-quiz" ? "space-quiz active" : "space-quiz "} 
                        onMouseEnter={() => setHoverSQ(true)} onMouseLeave={() => setHoverSQ(false)}>
                        <Link to="/space-quiz" className="link-style disabled"
                                onClick={() => setActivePath("space-quiz")}>Space Quiz</Link>
                        <div className={hoverSQ ? "nav-tooltip" : "hidden"}>landing soon!</div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}