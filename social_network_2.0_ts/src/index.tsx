import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


export const rerenderEntireTree = (store: any) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
    );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))


rerenderEntireTree(store);
store.subscribe(() => {
    rerenderEntireTree(store)
});