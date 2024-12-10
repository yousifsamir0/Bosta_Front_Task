
export type TransitEvent = {
    timestamp: string,
    state: string,
    code: number,
    msg?: string,
}


export type TrackResponse = {
    provider: string,
    Type: string,
    ScheduleDate: string,
    CurrentStatus: Omit<TransitEvent, 'msg'>,
    TrackingNumber: string,
    CreateDate: string,
    PromisedDate: string,
    collectedFromBusiness: string,
    TransitEvents?: TransitEvent[]
}
