import React from "react";
import s from './News.module.css'
import {newsPageType} from "../../redux/state";

type NewsPropsType = {
    state: newsPageType
}


export const News = (props: NewsPropsType) => {

    let newsElement = props.state.news.map(n => <div>{n.new}</div>)
    let newNewElement = React.createRef<HTMLTextAreaElement>()
    let newNewText = props.state.newNewsText

    let addNew = () => {

    }

    let onChangeNew = () => {

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