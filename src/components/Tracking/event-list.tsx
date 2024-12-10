import { cn } from '@/lib/utils'
import EventCard from './event-card'

type Props = {
    className?: string,
    events: { timestamp: string, state: string }[],
}


const EventList = ({ className, events }: Props) => {
    return (
        <div className={cn(
            "border-l-2 border-[#D0D5DD] px-5 py-3",
            "flex flex-col items-start justify-start gap-y-3",
            className,
        )}
        >
            {events.map((event, i) => (
                <EventCard key={i} event={event} />
            ))}
        </div>
    )
}

export default EventList