import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const renderEntireTree = () => {

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

renderEntireTree();
store.subscribe(renderEntireTree)