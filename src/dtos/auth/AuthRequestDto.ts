export interface SignInRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    firstName: string
    surname: string
    email: string
    phoneNo: string
    countryCode: string
    password: string
    code: number
}

export interface StaffLoginRequest {
    login: string
    password: string
}

export interface EmailRequest {
    email: string
}
