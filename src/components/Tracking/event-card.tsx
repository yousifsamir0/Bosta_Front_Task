import { cn, getTime } from '@/lib/utils'
import { useTranslation } from 'react-i18next';

type Props = {
    className?: string;
    event: { state: string; timestamp: string }
}

const EventCard = ({ className, event }: Props) => {
    const { i18n } = useTranslation();
    return (
        <div
            className={cn(
                'flex flex-col items-start justify-start border border-[#E4E7EC] rounded-md px-4 py-2 gap-y-2 ',
                'text-[14px] leading-5',
                className
            )}
        >
            <div className='text-[#111619] dark:text-[#fff] '>{event.state}</div>
            <div className='text-[#667085] '>{getTime(event.timestamp, i18n.language)}</div>
        </div>
    )
}

export default EventCard