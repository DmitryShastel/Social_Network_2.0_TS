import React from "react";
import s from './Profile.module.css'
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";




export const Profile = (props: MyPostsType) => {
    return (
        <div>
            <div>

                <div className={s.postsContent}>
                    <ProfileInfo/>
                    <MyPosts posts={props.state.posts}/>
                </div>
            </div>

        </div>
    )
}