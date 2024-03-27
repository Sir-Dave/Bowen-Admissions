export interface UserResponse{
    title: string
    message: string
    data: UserProfile
}

export interface UserProfile {
    id: number
    surname: string
    firstName: string
    middleName: string | null
    phoneNo: string | null
    dateOfBirth: string
    nationality: string | null
    stateOfOrigin: string | null
    localGovernment: string | null
    religion: string | null
    denomination: string | null
    gender: string | null
    maritalStatus: string | null
    maidenName: string | null
    email: string
    countryCode: string
    userType: number
}