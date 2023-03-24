import React from "react";
import {StoreType,} from "../../../redux/store";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../redux/StoreContext";


type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addNewPostTextActionCreator())
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }


    return (
        <StoreContext.Consumer>{
            (store) => (
                <MyPosts
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
                    addPost={addPost}/>
            )
        }
        </StoreContext.Consumer>

    )
}

