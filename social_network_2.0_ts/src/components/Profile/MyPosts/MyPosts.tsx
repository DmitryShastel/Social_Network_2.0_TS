import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'



export const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi how are you', like: 15},
        {id: 2, message: 'It is my first post', like: 23}
    ]



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

            <Post id={postData[0].id} message={postData[0].message} like = {postData[0].like}/>
            <Post id={postData[1].id} message={postData[1].message} like = {postData[1].like}/>

        </div>
    )
}