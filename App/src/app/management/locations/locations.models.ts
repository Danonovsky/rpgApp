export interface AddLocationRequest {
    name: string,
    campaignId: string
}

export interface EditLocationRequest extends AddLocationRequest {
    id: string
}

export interface LocationResponse {
    id: string,
    name: string,
    campaignId: string
}