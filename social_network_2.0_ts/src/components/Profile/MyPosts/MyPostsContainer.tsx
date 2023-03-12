import React from "react";
import {DispatchType, StoreType,} from "../../../redux/store";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostType = {
   store: StoreType
    dispatch: DispatchType
}

export const MyPostsContainer = (props: MyPostType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.dispatch(addNewPostTextActionCreator())
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }


    return (
        <MyPosts
            posts={state.posts} updateNewPostText={onPostChange} addPost={addPost}/>
    )
}

