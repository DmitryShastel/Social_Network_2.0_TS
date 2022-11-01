import React from "react";
import s from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>Dima</div>
                <div>Dima</div>
                <div>Dima</div>
            </div>
            <div className={s.message}>
                <div>hi</div>
                <div>hi</div>
                <div>hi</div>
            </div>

        </div>
    )
}