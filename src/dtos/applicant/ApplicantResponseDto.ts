export interface SessionInfo {
    id: number,
    sessionTitle: string,
    year: string,
    startDate: string,
    endDate: string

}

export interface SessionResponse {
    title: string
    message: string
    data: SessionInfo
}