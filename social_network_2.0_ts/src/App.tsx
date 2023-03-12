import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DispatchType, StateType, StoreType,} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NewsContainer} from "./components/News/NewsContainer";


type AppType = {
    store: StoreType
    state: StateType
    dispatch: DispatchType
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='profile/' element={<Profile store={props.store}/>}/>

                        <Route path='dialogs/*' element={<DialogsContainer store={props.store}/>}/>

                        <Route path='news/' element={<NewsContainer store={props.store}/>}/>

                        <Route path='music/' element={<Music/>}/>
                        <Route path='settings/' element={<Settings/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
