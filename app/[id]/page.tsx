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

    const handleRedirect = (recordingId: string) => {
        router.push(`/${params.id}/${recordingId}`);
    };

    return (
        <div className={s.container}>
            <h1>{data.title}</h1>
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
