import React from "react";
import {MessageType} from "../../../redux/store";
import s from './../Dialogs.module.css'


export const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg'/>
            {props.message}
        </div>
    )
}
