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
    order?: number,
    name: string,
    title?: string,
    subtitle?: string,
    recordings: { path: string, title?: string }[]
}
