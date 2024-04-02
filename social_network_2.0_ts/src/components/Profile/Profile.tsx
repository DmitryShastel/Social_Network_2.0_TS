import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


interface ProfileProps {
    profile: {
        photos: {
            small: string;
            large: string;
        };
    } | null
    status: string;
    updateStatus: (status: string) => void;
}

export const Profile = (props: ProfileProps) => {
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