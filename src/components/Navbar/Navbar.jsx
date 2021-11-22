import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeclassname={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeclassname={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="https://www.tactics.ge/">News</a>
            </div>
            <div className={s.item}>
                <a href="https://www.tactics.ge/">Music</a>
            </div>
            <div className={s.item}>
                <a href="https://www.tactics.ge/">Settings</a>
            </div>
        </nav>
    );
};
export default Navbar;