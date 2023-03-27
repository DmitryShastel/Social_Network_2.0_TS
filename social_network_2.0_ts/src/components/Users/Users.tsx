import React from "react";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UserType>) => void
}


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                              <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ?<button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)} }>Follow</button>
                            }

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