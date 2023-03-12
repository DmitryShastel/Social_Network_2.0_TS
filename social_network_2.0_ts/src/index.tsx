import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from "./redux/redux-store";
import {StateType} from "./redux/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const renderEntireTree = (state: StateType) => {

    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

// renderEntireTree();
// store.subscribe(renderEntireTree)

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})