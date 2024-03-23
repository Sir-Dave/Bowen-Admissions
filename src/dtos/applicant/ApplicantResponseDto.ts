export interface SessionResponse {
    title: string
    message: string
    data: SessionInfo[]
}

export interface SessionInfo {
    id: number,
    sessionTitle: string,
    year: string,
    startDate: string,
    endDate: string

}