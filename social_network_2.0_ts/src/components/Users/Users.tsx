import React from "react";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
}


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map( u =>   <div>
                    <span>
                        <img src={u.photoUrl}/>
                        <div>
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
              )}
        </div>
    )
}