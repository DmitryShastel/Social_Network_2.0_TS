import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'



export const MyPosts = () => {
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

            <Post message='Hi how are you' like = '  15'/>
            <Post message='It is my first post' like ='  23'/>
        </div>
    )
}