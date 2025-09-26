import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../styles/header.css";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <nav>
                        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/multivitaminicos">Multivitaminicos</Link></li>
                            <li><Link to="/oral_health">Oral Health</Link></li>
                            <li><Link to="/systematic">Pain Systematic</Link></li>
                            <li><Link to="/topic">Pain Topic</Link></li>
                            <li><Link to="/fijador_den">Dental Fixer</Link></li>
                            <li><Link to="/antitusives">Antitusives</Link></li>
                            <li><Link to="/antigripals">Antigripals</Link></li>
                            <li><Link to="/antiacidos">Anti-acids</Link></li>
                            <li><Link to="/vitamin-c">Vitamin - C</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
</div>
                    <img src="https://i.postimg.cc/7Zgyxv8b/haleon.png" alt="Logo" style={{ width: '25%', height: 'auto' }} />
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="theme-toggle"
                        title="Cambiar tema"
                    >
                        {darkMode ? "☀️" : "🌒"}
                    </button>
                </div>
            </header>
        </>
    );
}
