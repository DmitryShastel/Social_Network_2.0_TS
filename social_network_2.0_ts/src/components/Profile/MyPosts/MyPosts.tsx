import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    return (
        <div className={s.posts}>
            <div>Ava + description</div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <div className={s.button}>
                    <button>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}