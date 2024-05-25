export interface BookInterface {
    id: string,
    title: string,
    recordings: RecordingInterface[]
}

export interface RecordingInterface {
    id: string
    order?: number,
    name: string,
    title?: string,
    path: string
}
