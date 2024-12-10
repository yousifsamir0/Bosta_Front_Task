import { cn, groupByDate } from '@/lib/utils'
import EventList from './event-list'
import React from 'react'
import { useShipment } from '@/context/tracking-context'



type Props = {
    className?: string
}

const TrackingEvents = ({ className }: Props) => {
    const { transitEvents } = useShipment()
    const groupedEvents = transitEvents && groupByDate(transitEvents);
    if (groupedEvents)
        return (
            < div className={cn("w-full flex justify-center font-Cairo", className)} >
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
            </div >
        )
}

export default TrackingEvents