'use client'

import { explanationsData as data } from "@/public/data";
import s from './styles.module.scss';

export default function Page() {
    return <div className={s.container}>
        <button className={s.backBtn} onClick={() => window.history.back()}>
            {"חזור"}
        </button>
        {
            data.map((explanation, i) =>
                <div key={i} className={s.explanation}>
                    {explanation.title && <h1>{explanation.title}</h1>}
                    <img src={explanation.imgPath} alt="image" />
                    <p>{explanation.text}</p>
                </div>
            )
        }
    </div>
}