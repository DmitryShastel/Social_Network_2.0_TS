import React from "react";
import {Post} from "./Post/Post";
import s from './Myposts.module.css'
import {DispatchType, PostsType,} from "../../../redux/store";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


type MyPostType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: DispatchType
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: MyPostType) => {

    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.dispatch(addNewPostTextActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : ''
        props.updateNewPostText(text)

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
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

