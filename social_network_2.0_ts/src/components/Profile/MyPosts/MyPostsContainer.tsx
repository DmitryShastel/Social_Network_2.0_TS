import React from "react";
//import {addNewPostTextActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    //@ts-ignore
    posts: Array<PostsType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
type MapStateDispatchType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapStateDispatchType => {
    return {
        addPost: () => {
            //@ts-ignore
            dispatch(addNewPostTextActionCreator())
        },
        updateNewPostText: (text: string) => {
            //@ts-ignore
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
