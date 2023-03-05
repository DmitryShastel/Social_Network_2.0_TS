import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";


export const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU'/>
            <NavLink to={path} className={navData => navData.isActive ? s.active : s.item}>{props.name}</NavLink>
        </div>
    )
}

