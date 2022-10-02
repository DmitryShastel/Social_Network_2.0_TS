import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";



export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-st-lucia-caribbean.jpg'/>
                <div className={s.postsContent}>
                    <MyPosts/>
                </div>
            </div>

        </div>
    )
}