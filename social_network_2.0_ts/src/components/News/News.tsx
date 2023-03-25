import React from "react";
import s from './News.module.css'


type NewsPropsType = {
    updateNewText: (text: string) => void
    addNew: () => void
    newsPage: newsPageType
}

export type NewsType = {
    id: number
    new: string
}

type newsPageType = {
    news: Array<NewsType>
    newNewsText: string
}

export const News = (props: NewsPropsType) => {

    let state = props.newsPage

    let newsElement = state.news.map(n => <div>{n.new}</div>)
    let newNewElement = React.createRef<HTMLTextAreaElement>()
    let newNewText = state.newNewsText

    let addNew = () => {
        props.addNew()
    }

    let onChangeNew = () => {
        let text = newNewElement.current ? newNewElement.current.value : ''
        props.updateNewText(text)

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