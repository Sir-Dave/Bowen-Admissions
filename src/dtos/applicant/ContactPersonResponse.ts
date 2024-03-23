export interface ContactPersonResponse {
    title: string
    message: string
    data: ContactPerson[]
}

export interface ContactPerson {
    id: number
    name: string
    phone: string
    email: string
}