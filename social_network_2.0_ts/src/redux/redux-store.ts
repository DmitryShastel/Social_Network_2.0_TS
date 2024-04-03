import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {newsReducer} from "./news-reducer";
import {userReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form';
import {thunk as thunkMiddleware} from 'redux-thunk'

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer,
    news: newsReducer,
    form: formReducer,
    newsPage: newsReducer,
})

export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))