'use client'

import { projectsData } from "@/public/data";
import s from './styles.module.scss';
import { useRouter } from 'next/navigation';
import AudioWavesurfer from "@/components/wavesurfer/wavesurfer";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string, recordingId: string } }) {
    const router = useRouter();
    const data = projectsData.find(x => x.id === params.id);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change to true when the user has scrolled more than 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                <div className={`${s.topBtns} ${isScrolled ? s.scrolled : ""}`}>
                    <button className={`${s.btn} ${s.back}`} onClick={() => handleRedirect("", true)}>
                        {"לכל הפרקים"}
                    </button>
                    {recording.downloadPath && (
                        <a
                            href={recording.downloadPath}
                            download={recording.downloadPath.split('/').pop()}
                            className={`${s.btn} ${s.file}`}
                        >
                            {"הורדת תרגול"}
                        </a>
                    )}
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
                                // <div key={i} className={s.recording}>
                                //     {r.title && <span>{r.title}</span>}
                                //     <audio key={i} controls playsInline onPlay={(e: any) => e.target.playbackRate = 0.75}>
                                //         <source src={r.path} type="audio/mp3" />
                                //         Your browser does not support the audio tag.
                                //     </audio>
                                // </div>
                                <AudioWavesurfer key={i} recording={r} />
                            )
                        }
                    </div>

                    <div className={s.btns}>
                        {
                            recordingIndex < data.recordings.length - 1 &&

                            <button className={s.btn} onClick={() => handleRedirect(data.recordings[recordingIndex + 1].id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                                {"הבא"}
                            </button>
                        }
                        {recordingIndex > 0 &&
                            <button className={s.btn} onClick={() => handleRedirect(data.recordings[recordingIndex + -1].id)}>
                                {"חזור"}
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                            </button>
                        }
                    </div>
                </div>
                {/* "Go Up" button with SVG icon */}
                {isScrolled && (
                    < button className={s.goUpBtn} onClick={scrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>
                    </button>
                )
                }
            </div >
        }
    }

    return <div>{"Sorry, can't find this Recording"}</div>
}