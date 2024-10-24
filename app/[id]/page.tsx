'use client'

import { projectsData } from '@/public/data';
import s from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();
    const data = projectsData.find(x => x.id.includes(params.id));

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

    if (!data) {
        return <div>{"Sorry, can't find this Book"}</div>;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleRedirect = (recordingId: string, isBack: boolean = false) => {
        let path = `/`;

        if (!isBack)
            path += `${params.id}/${recordingId}`

        router.push(path);
    };

    return (
        <div className={s.container}>
            <div className={`${s.topBtns} ${isScrolled ? s.scrolled : ""}`}>
                <button className={`${s.btn} ${s.back}`} onClick={() => handleRedirect("", true)}>
                    {"לכל הספרים"}
                </button>
            </div>
            <div className={s.title}>
                <h1 className={s.name} dangerouslySetInnerHTML={{ __html: data.title || data.name }}></h1>
                {data.subtitle && <h3 className={s.name} dangerouslySetInnerHTML={{ __html: data.subtitle }}></h3>}
            </div>
            {data.recordings.map((recording) => (
                <button
                    className={s.btn}
                    key={recording.id}
                    onClick={() => handleRedirect(recording.id)}
                >
                    <div className={s.rname}>
                        <h2>{recording.name}</h2>
                    </div>
                    {
                        (recording.title || recording.subtitle) &&
                        <div className={s.description}>

                            {recording.title && <span className={s.rtitle}>{recording.title}</span>}
                            {recording.subtitle && <span className={s.rsubtitle}>{recording.subtitle}</span>}
                        </div>
                    }
                </button>
            ))}

            {/* "Go Up" button with SVG icon */}
            {isScrolled && (
                < button className={s.goUpBtn} onClick={scrollToTop}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>
                </button>
            )
            }
        </div >
    );
}
