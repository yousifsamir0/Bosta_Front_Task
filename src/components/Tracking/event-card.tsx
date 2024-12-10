import { cn } from '@/lib/utils'

type Props = {
    className?: string;
    event: { state: string; timestamp: string }
}

const EventCard = ({ className, event }: Props) => {
    return (
        <div
            className={cn(
                'flex flex-col items-start justify-start border border-[#E4E7EC] rounded-md px-4 py-2 gap-y-2 ',
                'text-[14px] leading-5',
                className
            )}
        >
            <div className='text-[#111619] '>{event.state}</div>
            <div className='text-[#667085] '>{'2:42 PM • Katameya, Cairo'}</div>
        </div>
    )
}

export default EventCard