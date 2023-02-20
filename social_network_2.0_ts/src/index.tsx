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
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>
    );
}


renderEntireTree(store.getState());
store.subscribe(renderEntireTree)
