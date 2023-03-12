import {ActionType, newsPageType, NewsType} from "./store";

const ADD_NEW = 'ADD-NEW'
const UPDATE_NEW = 'UPDATE-NEW'


export type AddNewActionType = {
    type: 'ADD-NEW'
}
export  type UpdateNewActionType = {
    type: 'UPDATE-NEW',
    newNewsText: string
}

export type AddNewActionCreatorType = () => AddNewActionType
export type UpdateNewActionCreatorType = (text: string) => UpdateNewActionType


export const newsReducer = (state: newsPageType, action: ActionType): newsPageType => {
    switch (action.type) {
        case ADD_NEW:
            let newNew: NewsType = {
                id: new Date().getTime(),
                new: state.newNewsText
            }
            state.news.push(newNew)
            state.newNewsText = ''
            return state
        case UPDATE_NEW:
            state.newNewsText = action.newNewsText
            return state
        default:
            return state
    }
}

export const addNewActionCreator: AddNewActionCreatorType = () => {
    return {
        type: ADD_NEW
    }
}
export const updateNewActionCreator: UpdateNewActionCreatorType = (text) => {
    return {
        type: UPDATE_NEW,
        newNewsText: text
    }
}