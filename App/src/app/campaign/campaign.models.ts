import { PublicUserResponse } from "../profile/profile.models";

export interface CampaignRequest {
    name: string,
    description: string,
    isPublic: boolean
}

export interface CampaignResponse {
    id: string,
    name: string,
    description: string,
    isPublic: boolean
    user: PublicUserResponse
}