import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostsType} from "../../redux/state";

export type ProfileType = {
    profilePage: {
        posts: PostsType[]
        newPostText: string
    } ,
    dispatch: DispatchType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}
                />

            </div>
        </div>
    )
}