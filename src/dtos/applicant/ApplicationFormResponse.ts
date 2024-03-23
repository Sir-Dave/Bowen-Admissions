export interface ApplicationFormResponse {
    title: string
    message: string
    data: ApplicationForm
}

export interface ApplicationForm {
    formId: number
    applicantId: number
    applicationId: number
    type: string
    status: string
    sessionTitle: string
    year: string
    startDate: string
    endDate: string
}