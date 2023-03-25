import React from "react";
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/dialogs-reducer";


export const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg'/>
            {props.message}
        </div>
    )
}
