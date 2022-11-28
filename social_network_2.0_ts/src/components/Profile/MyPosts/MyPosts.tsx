import React from "react";
import {Post, PostType} from "./Post/Post";
import s from './Myposts.module.css'


export type MyPostsType = {
    posts: Array<PostType>
}

export const MyPosts = (props:MyPostsType) => {

    // let posts = [
    //     {id: 1, message: 'Hi how are you', like: 15},
    //     {id: 2, message: 'It is my first post', like: 23}
    // ]


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