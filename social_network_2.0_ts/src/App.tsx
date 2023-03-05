import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DispatchType, StateType, StoreType,} from "./redux/state";


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
                        <Route path='profile/' element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
                        <Route path='dialogs/*' element={<Dialogs
                            store={props.store}
                        />}/>
                        <Route path='news/' element={<News
                            state={props.state.newsPage}
                            dispatch={props.dispatch}
                        />}/>
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
