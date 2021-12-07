export interface Character {
    firstName: string,
    lastName: string,
    race: Race,
    characteristics: Characteristic[],
    skills: Skill[]
}

export interface Race {
    name: string,
    characteristics?: Characteristic[],
    skills?: Skill[]
}

export interface Characteristic {
    name: string,
    value: number,
    advancement: number
}

export interface CharacteristicResponse extends Characteristic {
    id: string
}

export interface Skill {
    name: string,
    value: number,
    advancement: number
}

export interface SkillResponse extends Skill {
    id: string
}

export interface CharacterRollRequest {
    systemName: string,
    race: string,
    attribute?: string
}

export interface AddCharacterRequest {
    character: Character,
    campaignId: string
}

export interface CharacterSimpleResponse {
    id: string,
    firstName: string,
    lastName: string
}

export interface CharacterResponse extends CharacterSimpleResponse {
    skills: Skill[],
    characteristics: Characteristic[]
}