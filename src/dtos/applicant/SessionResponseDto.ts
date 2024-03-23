export interface SessionResponse {
    title: string
    message: string
    data: Session[]
}

export interface Session {
    id: number
    sessionTitle: string
    year: string
    startDate: string
    endDate: string

}