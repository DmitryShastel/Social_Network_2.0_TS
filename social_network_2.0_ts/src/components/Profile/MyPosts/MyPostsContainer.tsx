import React from "react";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



// export const MyPostsContainer: React.FC = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState()
//
//                     const addPost = () => {
//                         store.dispatch(addNewPostTextActionCreator())
//                     }
//
//                     const onPostChange = (text: string) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }
//
//                     return <MyPosts
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }


const mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addNewPostTextActionCreator())
        },
        updateNewPostText: (text: any) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)
