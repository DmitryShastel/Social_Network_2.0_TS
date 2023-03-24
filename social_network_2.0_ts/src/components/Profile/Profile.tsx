import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    store: StoreType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    )
}