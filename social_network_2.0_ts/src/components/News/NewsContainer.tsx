import React from "react";
import {addNewActionCreator, updateNewActionCreator} from "../../redux/news-reducer";

import {News} from "./News";

// type NewsContainerType = {
//     store: StoreType
// }

export const NewsContainer = (props: any) => {

    let state = props.store.getState().newsPage

    let addNew = () => {
        props.store.dispatch(addNewActionCreator())
    }

    let onChangeNew = (text: string) => {
        let action = updateNewActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <News
            updateNewText={onChangeNew}
            addNew={addNew}
            newsPage={state}/>
    )
}