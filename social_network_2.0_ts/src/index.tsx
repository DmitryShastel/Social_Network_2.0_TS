import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// export const rerenderEntireTree = () => {
//     root.render(
//         <React.StrictMode>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </React.StrictMode>,
//     );
// }





// @ts-ignore
// const root = ReactDOM.createRoot(document.getElementById('root'))
//
//
// rerenderEntireTree();
// store.subscribe(() => {
//     rerenderEntireTree()
// });