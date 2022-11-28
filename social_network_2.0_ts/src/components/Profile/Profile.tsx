import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


let posts = [
    {id: 1, message: 'Hi how are you', like: 15},
    {id: 2, message: 'It is my first post', like: 23}
]

export const Profile = () => {
    return (
        <div>
            <div>

                <div className={s.postsContent}>
                    <ProfileInfo/>
                    <MyPosts posts={posts}/>
                </div>
            </div>

        </div>
    )
}