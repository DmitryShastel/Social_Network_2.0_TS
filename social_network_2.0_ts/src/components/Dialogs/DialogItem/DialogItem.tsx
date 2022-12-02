import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";


export const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
    )
}

