import React from "react";
import {Preloader} from "../../Common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import s from './ProfileInfo.module.css'


type ProfileInfoPropsType = {
    profile: {
        photos: {
            small: string;
            large: string;
        };
    } | null;
    status: string
    updateStatus: (status: string) => void;
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.container}>
            {props.profile.photos && (
                <img src={props.profile.photos.large}/>
            )}
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}/>
        </div>
    )
}