import React from "react";
import {Post} from "./Post/Post";



export const MyPosts = () => {
    return (
        <div>
            <div>Ava + description</div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <Post message='Hi how are you' like = '  15'/>
            <Post message='It is my first post' like ='  23'/>
        </div>
    )
}