'use client'

import { projectsData as data } from "@/public/data";
import s from './styles.module.scss';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRedirect = (book: string) => {
    router.push(`/${book}`);
  };

  return (
    <main>
      <h1 className={s.title}>{"בחר ספר"}</h1>
      <div className={s.books}>
        {data.map(x =>
          <button key={x.id} className={s.container} onClick={() => handleRedirect(x.id)}>
            <strong>
              {x.name}
            </strong>
            <img className={s.img} src={x.imgPath} alt="book" />
          </button>
        )}
      </div>
    </main>
  );
}
