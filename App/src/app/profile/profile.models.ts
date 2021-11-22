export interface LoginRequest {
    email: string,
    password: string
}

export interface SignupRequest {
    email: string,
    password: string,
    repeatPassword: string,
    username: string
}

export interface LoginResponse {
    token: string
}