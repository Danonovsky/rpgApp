export interface AddItemRequest {
    name: string,
    description: string,
    campaignId: string
}

export interface ItemResponse {
    id: string,
    name: string,
    description: string,
    url: string,
    campaignId: string
}

export interface AssignItemToCharacterRequest {
    itemId: string,
    characterId: string
}