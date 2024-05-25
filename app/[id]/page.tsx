'use client'

import { projectsData } from '@/public/data';
import s from './styles.module.scss';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();

    const data = projectsData.find(x => x.id.includes(params.id));

    if (!data) {
        return <div>{"Sorry, can't find this Book"}</div>;
    }

    const handleRedirect = (recordingId: string, isBack: boolean = false) => {
        let path = `/`;

        if (!isBack)
            path += `${params.id}/${recordingId}`

        router.push(path);
    };

    return (
        <div className={s.container}>
            <button className={`${s.btn} ${s.back}`} onClick={() => handleRedirect("", true)}>
                {"בחירת ספר"}
            </button>
            <div className={s.title}>
                <h1 className={s.name} dangerouslySetInnerHTML={{ __html: data.title || data.name }}></h1>
            </div>
            {data.recordings.map((recording) => (
                <button
                    className={s.btn}
                    key={recording.id}
                    onClick={() => handleRedirect(recording.id)}
                >
                    {recording.name}
                </button>
            ))}
        </div>
    );
}
