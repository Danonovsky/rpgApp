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