import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile: React.FC = (props: any) => {
    return (
        <div>

            <div className={s.postsContent}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}