export interface AddNoteRequest {
    title: string,
    description: string,
    campaignId: string
}

export interface NoteResponse {
    id: string,
    title: string,
    description: string,
    url: string,
    campaignId: string
}