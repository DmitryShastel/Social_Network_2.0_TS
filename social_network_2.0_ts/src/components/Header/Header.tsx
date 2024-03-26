import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    getAuthMeUserData: () => void
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://st3.depositphotos.com/1764439/17897/i/600/depositphotos_178973448-stock-photo-yin-yang-tree-logo.jpg'/>
            <div className={s.login}>

                {
                    props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}