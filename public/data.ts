import { BookInterface } from "./types";

export const projectsData: BookInterface[] = [
    {
        id: "book1",
        title: "This is the first book",
        recordings: [
            {
                id: "1",
                order: 1,
                name: "Scoters 1",
                path: "/recordings/1.mp3"
            }, {
                id: "2",
                order: 2,
                name: "Scoters 2",
                path: "/recordings/1.mp3"
            }, {
                id: "3",
                order: 3,
                name: "Scoters 3",
                path: "/recordings/1.mp3"
            }, {
                id: "4",
                order: 4,
                name: "Scoters 4",
                path: "/recordings/1.mp3"
            }, {
                id: "5",
                order: 5,
                name: "Scoters 5",
                path: "/recordings/1.mp3"
            },
        ]
    },
    {
        id: "theScotterBook",
        title: "The Scotter Book chapter A",
        recordings: [
            {
                id: "A1",
                name: "a1 - the scotter story",
                path: "/recordings/2.mp3"
            },
            {
                id: "A2",
                name: "a2 - the scotter story",
                path: "/recordings/1.mp3"
            },
            {
                id: "A3",
                name: "a3 - the scotter story",
                path: "/recordings/1.mp3"
            }
        ]
    }
]
