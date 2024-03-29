import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navContent}>
                <div>
                    <NavLink to='/profile' className={ navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={ navData => navData.isActive ? s.active : s.item}>Message</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={ navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/users' className={ navData => navData.isActive ? s.active : s.item}>Users</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={ navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={ navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}