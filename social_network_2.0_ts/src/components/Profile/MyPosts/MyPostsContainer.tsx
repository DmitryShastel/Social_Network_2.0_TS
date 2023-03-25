import React from "react";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addNewPostTextActionCreator())
        },
        updateNewPostText: (text: any) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
