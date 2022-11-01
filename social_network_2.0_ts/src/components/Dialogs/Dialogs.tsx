import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Dima</NavLink>

            </div>
            <div className={s.message}>
                <div>hi</div>

            </div>

        </div>
    )
}