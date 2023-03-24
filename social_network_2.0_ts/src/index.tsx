import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./App";
import {store} from "./redux/redux-store";
import {StoreContext} from './redux/StoreContext';


export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>,
    );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))


rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree()
});