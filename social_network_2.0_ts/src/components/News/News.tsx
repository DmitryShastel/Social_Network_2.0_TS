import React from "react";
import s from './News.module.css'
import {addNewActionCreator, updateNewActionCreator} from "../../redux/news-reducer";
import {DispatchType, newsPageType} from "../../redux/store";

type NewsPropsType = {
    state: newsPageType
    dispatch: DispatchType
}

export const News = (props: NewsPropsType) => {

    let newsElement = props.state.news.map(n => <div>{n.new}</div>)
    let newNewElement = React.createRef<HTMLTextAreaElement>()
    let newNewText = props.state.newNewsText

    let addNew = () => {
        props.dispatch(addNewActionCreator())
    }

    let onChangeNew = () => {
        let text = newNewElement.current ? newNewElement.current.value : ''
        let action = updateNewActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            <div className={s.news}>
                {newsElement}
            </div>


            <div className={s.addNews}>
                <div>
                    <textarea
                        ref={newNewElement}
                        value={newNewText}
                        onChange={onChangeNew}
                    />
                </div>
                <div>
                    <button onClick={addNew}>Add a new</button>
                </div>
            </div>
        </div>
    )
}