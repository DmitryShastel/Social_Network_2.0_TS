import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {ProfilePageType} from "../../../redux/state";


export const MyPosts = (props: ProfilePageType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.posts}>
            <div>Ava + description</div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div className={s.button}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

