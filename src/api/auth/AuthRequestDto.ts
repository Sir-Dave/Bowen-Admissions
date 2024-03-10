interface SignInRequest {
    email: string
    password: string
}

interface RegisterRequest {
    firstName: string
    surname: string
    email: string
    phoneNo: string
    countryCode: string
    password: string
    code: number
}

interface StaffLoginRequest {
    login: string
    password: string
}

interface EmailRequest {
    email: string
}
