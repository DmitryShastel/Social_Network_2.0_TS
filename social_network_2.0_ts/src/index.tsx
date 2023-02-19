import React from 'react';
import './index.css';
import {addPost, state, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export const renderEntireTree = (state: StateType) => {

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

renderEntireTree(state) ;
subscribe(renderEntireTree)
