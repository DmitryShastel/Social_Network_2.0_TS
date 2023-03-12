import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostsType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/redux-store";

export type ProfileType = {
    profilePage: {
        posts: PostsType[]
        newPostText: string
    },
    dispatch: DispatchType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPostsContainer store={store}/>
            </div>
        </div>
    )
}