import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {
    addNewPostTextActionCreator,
    DispatchType,
    PostsType,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type MyPostType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: DispatchType
}

export const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addNewPostTextActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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

