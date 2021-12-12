import { PublicUserResponse } from "src/app/profile/profile.models";
import { CharacterSimpleResponse } from "../characters/character.models";

export interface CampaignPlayerResponse {
    id: string,
    campaignId: string,
    character: CharacterSimpleResponse,
    user: PublicUserResponse
}

export interface AssignCharacterRequest {
    playerId: string,
    characterId?: string
}

export interface UnassignCharacterRequest {
    playerId: string,
    campaignId: string
}