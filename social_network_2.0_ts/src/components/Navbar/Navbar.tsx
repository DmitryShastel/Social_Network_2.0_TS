import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navContent}>
                <div>
                    <a className={`${s.item} ${s.active}`} href=''>Profile</a>
                </div>
                <div>
                    <a className={s.item} href=''>Message</a>
                </div>
                <div>
                    <a className={s.item} href=''>News</a>
                </div>
                <div>
                    <a className={s.item} href=''>Music</a>
                </div>
                <div>
                    <a className={s.item} href=''>Settings</a>
                </div>
            </div>
        </nav>
    )
}