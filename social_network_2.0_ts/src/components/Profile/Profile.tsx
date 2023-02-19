import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPostType, ProfilePageType} from "../../redux/state";

export type ProfileType = {
    profilePage: ProfilePageType
    addPost: addPostType
}

export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPosts
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}/>
            </div>
        </div>
    )
}