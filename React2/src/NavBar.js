import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Новини</Link></li>
                <li><Link to="/login">Вхід</Link></li>
                <li><Link to="/register">Реєстрація</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;