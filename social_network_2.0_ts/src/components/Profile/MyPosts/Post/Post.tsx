import React from "react";
import s from './Post.module.css'

export type PostType = {
    like: string | number
    message: string | number
    id: number
}

export const Post = (props:PostType) => {


    return (
        <div className={s.mypost}>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0Kl2NFoXYE4jav-CZD1y_5SKKiamvXJwDg&usqp=CAU'/>
                {props.message}
            </div>
            <div className={s.item}>
                <nav>Like{props.like}</nav>
            </div>
        </div>
    )
}