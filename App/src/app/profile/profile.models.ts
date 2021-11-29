export interface LoginRequest {
    email: string,
    password: string
}

export interface SignupRequest {
    email: string,
    password: string,
    repeatPassword: string,
    name: string
}

export interface LoginResponse {
    token: string
}

export interface PublicUserResponse {
    id: string,
    name: string
}