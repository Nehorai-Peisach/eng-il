export interface BookInterface {
    id: string,
    name: string,
    title?: string,
    recordings: RecordingInterface[],
    imgPath: string
}

export interface RecordingInterface {
    id: string
    order?: number,
    name: string,
    title?: string,
    paths: string[]
}
