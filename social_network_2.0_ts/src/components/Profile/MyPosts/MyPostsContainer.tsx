import React from "react";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../redux/StoreContext";


export const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState()

                    const addPost = () => {
                        store.dispatch(addNewPostTextActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }

                    return <MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        updateNewPostText={onPostChange}
                        addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>

    )
}

