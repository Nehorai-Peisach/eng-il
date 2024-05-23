export interface BookInterface {
    id: string,
    title: string,
    recordings: RecordingInterface[]
}

export interface RecordingInterface {
    id: string
    order?: number,
    name: string,
    path: string
}
