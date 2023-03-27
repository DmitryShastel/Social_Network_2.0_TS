import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UserType>) => void
}


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUser([

                {
                    id: 1,
                    photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
                    fullName: 'Dima',
                    followed: false,
                    status: 'I am a boss',
                    location: {country: 'Belarus', city: 'Minsk'},
                },
                {
                    id: 2,
                    photoUrl: 'https://www.denofgeek.com/wp-content/uploads/2021/12/the-matrix-resurrections-agent-smith-hugo-weaving.jpg?fit=1600%2C1067',
                    fullName: 'Vasa',
                    followed: true,
                    status: 'I am a boss too',
                    location: {country: 'Russia', city: 'Moscow'},
                },

            ] as Array<UserType>
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
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