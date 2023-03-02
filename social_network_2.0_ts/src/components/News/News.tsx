import React from "react";
import s from './News.module.css'

export const News = () => {
    return (
        <div >
            <div className={s.news}>
                News
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