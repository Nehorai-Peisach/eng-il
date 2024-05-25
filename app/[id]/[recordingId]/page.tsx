'use client'

import { projectsData } from "@/public/data";
import s from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from "react";

export default function Page({ params }: { params: { id: string, recordingId: string } }) {
    const router = useRouter();
    const audioRef = useRef<any>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.playbackRate = .75;
        }
    }, []);


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
                <button className={`${s.btn} ${s.back}`} onClick={() => handleRedirect("", true)}>
                    {"חזור לתפריט"}
                </button>
                <div className={`${s.title} ${s.example}`}>
                    <h1 className={s.name} dangerouslySetInnerHTML={{ __html: recording.title || recording.name }}></h1>
                </div>
                <div className={s.recordingContainer}>
                    <div className={s.recordings}>


                        {
                            recording.paths.map(path =>
                                <audio ref={audioRef} controls playsInline>
                                    <source src={path} type="audio/mp3" />
                                    Your browser does not support the audio tag.
                                </audio>
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