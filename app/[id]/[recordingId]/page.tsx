'use client'

import { projectsData } from "@/public/data";
import s from './styles.module.scss';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string, recordingId: string } }) {
    const router = useRouter();
    const data = projectsData.find(x => x.id === params.id);

    const handleRedirect = (recordingId: string, isBack: boolean = false) => {
        let path = `/${params.id}`;

        if (!isBack)
            path += `/${recordingId}`

        router.push(path);
    };

    if (data) {
        const recordingIndex = data.recordings.findIndex(x => x.id === params.recordingId);

        if (recordingIndex > -1) {
            const recording = data.recordings[recordingIndex];


            return <div className={s.container}>
                <div className={s.topBtns}>
                    <button className={`${s.btn} ${s.back}`} onClick={() => handleRedirect("", true)}>
                        {"חזור לתפריט"}
                    </button>
                    <button className={`${s.btn} ${s.info}`} onClick={() => router.push("/explanation")}>
                        {"למדריך"}
                    </button>
                </div>
                <div className={s.title}>
                    <div className={s.name}>
                        <h1>
                            {recording.name}
                        </h1>
                    </div>
                    {recording.title && <h1 dangerouslySetInnerHTML={{ __html: recording.title }}></h1>}
                    {recording.subtitle && <h3 dangerouslySetInnerHTML={{ __html: recording.subtitle }}></h3>}
                </div>
                <div className={s.recordingContainer}>
                    <div className={s.recordings}>
                        {
                            recording.recordings.map((r, i) =>
                                <div key={i} className={s.recording}>
                                    {r.title && <span>{r.title}</span>}
                                    <audio key={i} controls playsInline onPlay={(e: any) => e.target.playbackRate = 0.75}>
                                        <source src={r.path} type="audio/mp3" />
                                        Your browser does not support the audio tag.
                                    </audio>
                                </div>
                            )
                        }
                    </div>

                    <div className={s.btns}>
                        {
                            recordingIndex < data.recordings.length - 1 &&

                            <button className={s.btn} onClick={() => handleRedirect(data.recordings[recordingIndex + 1].id)}>
                                {"← הבא"}
                            </button>
                        }
                        {recordingIndex > 0 &&
                            <button className={s.btn} onClick={() => handleRedirect(data.recordings[recordingIndex + -1].id)}>
                                {"חזור →"}
                            </button>
                        }
                    </div>
                </div>
            </div >
        }
    }

    return <div>{"Sorry, can't find this Recording"}</div>
}