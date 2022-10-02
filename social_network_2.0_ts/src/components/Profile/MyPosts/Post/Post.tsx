import React from "react";
import s from './Post.module.css'

export type PostType = {
    like: string
    message: string | number
}

export const Post: React.FC<PostType> = (props) => {
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