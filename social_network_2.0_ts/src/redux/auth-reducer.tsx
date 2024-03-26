import {authMe} from "../API/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'


let initialStateAuth = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: false,
}

export type InitialStateAuthType = typeof initialStateAuth


export type SetUserDataACType = (id: number | null, email: string | null, login: string | null) => SetUserDataActionType

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    data: DataType
}
export type AuthActionsType = SetUserDataActionType

export const authReducer = (state: InitialStateAuthType = initialStateAuth, action: AuthActionsType): InitialStateAuthType => {

    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData: SetUserDataACType =
    (id: number | null, email: string | null, login: string | null): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        }
    }
}

//thunks
export const getAuthMeUserData = () => (dispatch: Dispatch<AuthActionsType>) => {
    authMe.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

