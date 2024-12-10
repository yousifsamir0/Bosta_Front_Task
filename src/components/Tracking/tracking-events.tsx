import { cn, groupByDate } from '@/lib/utils'
import EventList from './event-list'
import React from 'react'



const TransitEvents = [
    {
        "timestamp": "2024-08-07T14:22:48.656Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:23:04.382Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:26:44.581Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:27:29.643Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:28:18.526Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:52:29.952Z",
        "state": "Your order is created, Bosta will pick it up once your shipper is ready",
        "code": 10
    },
    {
        "timestamp": "2024-08-07T14:52:32.516Z",
        "state": "Order is received at Bosta warehouses and being processed.",
        "code": 24
    },
    {
        "timestamp": "2024-08-07T14:55:39.149Z",
        "state": "Order is being prepared for delivery.",
        "code": 20
    },
    {
        "timestamp": "2024-08-07T15:38:10.968Z",
        "state": "Order is out for delivery",
        "msg": "Will be Deliverd from 10 AM to 6 PM According to the Courier Route",
        "code": 41
    },
    {
        "timestamp": "2024-08-07T16:19:51.972Z",
        "state": "Order is rescheduled as you were not reachable on the phone",
        "exceptionCode": "7",
        "code": 47
    },
    {
        "timestamp": "2024-08-07T16:20:13.758Z",
        "state": "Order is received at Bosta warehouses and being processed.",
        "code": 24
    }
]


type Props = {
    className?: string
}

const TrackingEvents = ({ className }: Props) => {

    const groupedEvents = groupByDate(TransitEvents);

    return (
        <div className={cn("w-full flex justify-center font-Cairo", className)}>
            <div className='w-full flex flex-col items-start justify-start gap-y-8'>
                <h1 className='text-[#667085] text-[20px] leading-7'>Tracking details</h1>
                <div className='flex flex-col gap-y-1'>
                    {groupedEvents.map((day: any) => (
                        <React.Fragment key={day.date}>
                            <div className='flex justify-start items-center gap-x-3'>
                                <div className='size-4 bg-[#D0D5DD] rounded-full'></div>
                                <div className='text-[#111619] font-semibold text-[16px] leading-6 '>{day.date}</div>
                            </div>
                            <EventList className='mx-[7px]' key={day.date} events={day.events} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackingEvents