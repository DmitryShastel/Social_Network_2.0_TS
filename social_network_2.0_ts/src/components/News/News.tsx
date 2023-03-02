import React from "react";
import s from './News.module.css'
import {newsPageType} from "../../redux/state";

type NewsPropsType = {
    state: newsPageType
}


export const News = (props: NewsPropsType) => {

    let newsElement = props.state.news.map(n => <div>{n.new}</div>)

    return (
        <div>
            <div className={s.news}>
                {newsElement}
            </div>


            <div className={s.addNews}>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add New</button>
                </div>
            </div>
        </div>
    )
}