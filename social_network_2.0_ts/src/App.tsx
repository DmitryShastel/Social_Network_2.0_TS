import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Routes>
                        <Route path="profile/"
                            //@ts-ignore
                               element={<ProfileContainer/>}/>
                        <Route path='dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='users/' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
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
