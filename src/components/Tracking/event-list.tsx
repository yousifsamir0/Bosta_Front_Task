import { cn } from '@/lib/utils'
import EventCard from './event-card'
import { useTranslation } from 'react-i18next'

type Props = {
    className?: string,
    events: { timestamp: string, state: string }[],
}


const EventList = ({ className, events }: Props) => {
    const { i18n } = useTranslation()
    return (
        <div className={cn(
            "border-[#D0D5DD] px-5 py-3",
            (i18n.language === 'ar') ? 'border-r-2' : 'border-l-2',
            "flex flex-col items-start justify-start gap-y-3",
            className,
        )
        }
        >
            {
                events.map((event, i) => (
                    <EventCard key={i} event={event} />
                ))
            }
        </div >
    )
}

export default EventList