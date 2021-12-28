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
    url: string,
    user: PublicUserResponse,
    playerCount: number,
    locationCount: number,
    itemCount: number
}