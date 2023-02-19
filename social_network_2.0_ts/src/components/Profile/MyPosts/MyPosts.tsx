import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {addPostType, PostsType} from "../../../redux/state";


type MyPostType = {
    addPost: addPostType
    posts: Array<PostsType>
    newPostText?: string
}

export const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current) {
            let text = newPostElement.current?.value
            props.addPost(text);
        }
    }

    const onPostChange = () => {

    }

    return (
        <div className={s.posts}>
            <div>Ava + description</div>
            <div>My posts</div>
            <div>
                <textarea
                    ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <div className={s.button}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

