import React from 'react';
import './index.css';
import {addPost, state, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const renderEntireTree = (state: StateType) => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}


renderEntireTree(state);
subscribe(renderEntireTree)
