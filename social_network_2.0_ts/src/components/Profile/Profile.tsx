import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



export const Profile: React.FC = () => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    )
}