import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/survival-mission">Challeng - survive!</Link>
                    </li>
                    <li>
                        <Link to="/space-quiz">Space Quiz</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}