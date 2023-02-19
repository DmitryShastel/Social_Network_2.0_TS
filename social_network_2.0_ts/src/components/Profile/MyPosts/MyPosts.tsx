import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {addPostType, PostsType, updateNewPostText, updateNewPostTextType} from "../../../redux/state";


type MyPostType = {
    addPost: addPostType
    posts: Array<PostsType>
    newPostText?: string
    updateNewPostText: updateNewPostTextType
}

export const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost();
        props.updateNewPostText('')


        // if (newPostElement.current) {
        //     let text = newPostElement.current?.value
        //     props.addPost(text);
        //     props.updateNewPostText('')
        // }
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(newPostElement.current ? newPostElement.current.value : '')
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

