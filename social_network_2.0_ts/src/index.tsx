import React from 'react';
import './index.css';
import {StateType, store} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const renderEntireTree = (state: StateType) => {

    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );
}

//@ts-ignore
renderEntireTree(store.getState());
store.subscribe(renderEntireTree)

//