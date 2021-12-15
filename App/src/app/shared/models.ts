export interface Roll {
    amount: number,
    dice: number,
    static: number,
    multiplier: number
}

export interface RollResult {
    dices: number[],
    summary: number,
    summaryMultiplied: number
}

export interface SetUrlResponse {
    url: string
}

export function getUrl(url: string) {
    return url ? `https://localhost:5001/${url}` : `https://localhost:5001/resources/images/noAvatar.jpg`;
}