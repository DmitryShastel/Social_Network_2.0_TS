import React from "react";
//import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'
import userPhoto from '../../accets/image/userPhoto.png'
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    //@ts-ignore
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    //@ts-ignore
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

    const displayedPages = 10; // Ограничение на количество отображаемых страниц
    let startPage = 1;
    let endPage = displayedPages;
    // Вычисляем начальную и конечную страницы в зависимости от текущей страницы
    if (props.currentPage > Math.floor(displayedPages / 2)) {
        startPage = props.currentPage - Math.floor(displayedPages / 2);
        endPage = startPage + displayedPages - 1;
        if (endPage > pagesCount) {
            endPage = pagesCount;
            startPage = endPage - displayedPages + 1;
        }
    }

    const handleNextPage = () => {
        if (props.currentPage < pagesCount) {
            props.changedPage(props.currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (props.currentPage > 1) {
            props.changedPage(props.currentPage - 1);
        }
    };


    const handleFollow = (id: any) => {
        props.follow(id)
    };

    const handleUnfollow = (id: any) => {
        props.unfollow(id)
    };

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <button onClick={handlePrevPage} disabled={props.currentPage === 1}>
                    Prev
                </button>
                {Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i).map(p => {
                    //@ts-ignore
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.changedPage(p)
                                 }}
                    >{p},</span>
                })}
                <button
                    onClick={handleNextPage}
                    disabled={props.currentPage === pagesCount}
                >
                    Next
                </button>
            </div>
            {
                props.users.map(u => <div key={u.id}>

                    <span>
                        <div>
                             <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto
                        } className={s.userPhoto}/>
                                  </NavLink>
                    </div>
                        <div>
                            {
                                u.followed
                                    ? <button
                                        //@ts-ignore
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            handleUnfollow(u.id)
                                        }}>Unfollow</button>
                                    : <button
                                        //@ts-ignore
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            handleFollow(u.id)
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