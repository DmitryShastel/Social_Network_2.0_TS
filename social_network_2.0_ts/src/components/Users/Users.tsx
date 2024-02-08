import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import userPhoto from '../../accets/image/userPhoto.png'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUser: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    changedPage: (pageNumber: any) => void
}


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                {pages.map(p => {
                    //@ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.changedPage(p)
                                 }}
                    >{p},</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                        } className={s.userPhoto}/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            <div>location</div>
                    </span>
                    </div>
                )}
        </div>
    )
}