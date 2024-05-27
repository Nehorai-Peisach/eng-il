import { BookInterface } from "./types";

export const projectsData: BookInterface[] = [
    {
        id: "Book-A",
        name: "Book A",
        title: "This is a book about Teranovas",
        subtitle: "This is a book about Teranovas",
        imgPath: "/books/A.jpg",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "A1",
                title: "Teranovas 1",
                subtitle: "Teranovas asdf asdsda asd asdasd a asdasd as 1",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]
            },
            {
                id: "2",
                order: 3,
                name: "Teranovas 2",
                recordings: [{ path: "/recordings/1.mp3", title: "Last part:" }, { path: "/recordings/1.mp3" }]
            },
            {
                id: "3",
                order: 2,
                name: "Teranovas 3",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]
            }
        ]
    },
    {
        id: "Book-B",
        name: "Book B",
        title: "This is a book about Stars",
        imgPath: "/books/B.jpg",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "Stars 1",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]
            },
            {
                id: "2",
                order: 2,
                name: "Stars 2",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]
            }
        ]
    },
    {
        id: "Book-C",
        name: "Book C",
        title: "This is a book about Enchanted Places",
        imgPath: "/books/C.jpg",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "Enchanted Places 1",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "2",
                order: 2,
                name: "Enchanted Places 2",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "3",
                order: 3,
                name: "Enchanted Places 3",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "4",
                order: 4,
                name: "Enchanted Places 4",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            }
        ]
    },
    {
        id: "Book-D",
        name: "Book D",
        title: "This is a book about Revolution",
        imgPath: "/books/D.jpg",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "Revolution 1",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "2",
                order: 2,
                name: "Revolution 2",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "3",
                order: 3,
                name: "Revolution 3",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            }
        ]
    },
    {
        id: "Book-E",
        name: "Book E",
        title: "This is a book about the Future",
        imgPath: "/books/E.jpg",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "Future 1",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "2",
                order: 2,
                name: "Future 2",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "3",
                order: 3,
                name: "Future 3",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            },
            {
                id: "4",
                order: 4,
                name: "Future 4",
                recordings: [{ path: "/recordings/1.mp3", title: "Part one:" }, { path: "/recordings/1.mp3", title: "Part two:" }]

            }
        ]
    }
];



