import { PublicUserResponse } from "../profile/profile.models";

export interface CampaignRequest {
    name: string,
    description: string,
    isPublic: boolean,
    system: string
}

export interface CampaignResponse {
    id: string,
    name: string,
    description: string,
    isPublic: boolean,
    system: string,
    imageUrl: string,
    user: PublicUserResponse
}

export interface SetImageUrlRequest {
    campaignId: string,
    file: File
}

export interface SetImageUrlResponse {
    url: string
}