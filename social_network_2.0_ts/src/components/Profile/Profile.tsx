import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPostType, ProfilePageType, updateNewPostText, updateNewPostTextType} from "../../redux/state";

export type ProfileType = {
    profilePage: ProfilePageType
    addPost: addPostType
    updateNewPostText: updateNewPostTextType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />

            </div>
        </div>
    )
}