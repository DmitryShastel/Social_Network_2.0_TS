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
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";

type AppType = {
    posts: Array<PostType>
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='profife/' element={<Profile posts={props.posts}/>}/>
                        <Route path='dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='news/' element={<News/>}/>
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
