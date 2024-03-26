import React from "react";
import {Preloader} from "../../Common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img src='https://www.planetware.com/wpimages/2022/01/world-most-beautiful-islands-st-lucia-caribbean.jpg'/>*/}
            </div>
            <div>
                <img src={props.profile.photos.large || props.profile.photos}/>
                <ProfileStatus
                    //@ts-ignore
                    status={props.status}
                    updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}