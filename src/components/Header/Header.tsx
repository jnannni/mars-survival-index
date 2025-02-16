import { Link } from "react-router-dom";
import './header.css';
import { useState } from "react";

export default function Header() {
    const [activePath, setActivePath] = useState("/");
    const [hideNav, setHideNav] = useState(true);

    return (
        <header className="header container">
            <nav>
            <span className="material-symbols-outlined menu-symbol" onClick={() => setHideNav(!hideNav)}>menu</span>
                <ul className={hideNav ? "nav-list hidden" : "nav-list"}>
                    <li className={activePath === "/" ? "active" : ""}>
                        <Link to="/" className="link-style" onClick={() => setActivePath("/")}>Home</Link>                        
                    </li>
                    <li className={activePath === "/survival-mission" ? "active" : ""}>
                        <Link to="/survival-mission" className="link-style disabled"
                                onClick={() => setActivePath("/survival-mission")}>Challeng - survive!</Link>
                    </li>
                    <li className={activePath === "/space-quiz" ? "active" : ""}>
                        <Link to="/space-quiz" className="link-style disabled"
                                onClick={() => setActivePath("space-quiz")}>Space Quiz</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}