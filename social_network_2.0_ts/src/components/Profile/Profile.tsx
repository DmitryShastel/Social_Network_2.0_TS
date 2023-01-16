import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";


export const Profile = (props: ProfileType) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo/>
                <MyPosts posts={props.state.posts}/>
            </div>
        </div>
    )
}