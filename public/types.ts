export interface ExplanationInterface {
    title?: string,
    imgPath: string,
    text: string
}

export interface BookInterface {
    id: string,
    name: string,
    title?: string,
    subtitle?: string,
    recordings: RecordingInterface[],
    imgPath: string
}

export interface RecordingInterface {
    id: string
    name: string,
    title?: string,
    subtitle?: string,
    recordings: { path: string, title?: string }[]
    downloadPath?: string
}

export interface Recording { path: string, title?: string }
