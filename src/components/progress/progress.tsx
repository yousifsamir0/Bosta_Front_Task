import { cn, getFormattedDate } from '@/lib/utils'
import ProgressBar from './progress-bar'
import { useShipment } from '@/context/tracking-context'
import { useTranslation } from 'react-i18next'




const stateMapper = (code: number) => {

    const statusMap: { [key: number]: string } = {
        10: "Picked Up",          // Your order is created, Bosta will pick it up once your shipper is ready
        24: "Processing",         // Order is received at Bosta warehouses and being processed
        30: "Processing",         // Order is being transferred to Bosta's Hubs
        41: "Out for Delivery",   // Order is out for delivery
        45: "Delivered",          // Order is delivered
        47: "Canceled",           // Order is canceled since you refused to receive the order
        46: "Returned",           // Order is returned back to the shipper
    };

    return statusMap[code] || "Unknown Status";
}

type Props = {
    className?: string
}

const Progress = ({ className }: Props) => {

    const {
        currentStatus,
        trackingNumber

    } = useShipment();
    const { t, i18n } = useTranslation()
    if (currentStatus)
        return (
            <div
                className={cn(
                    className,
                    "w-full flex justify-center font-Rubik",
                    i18n.language === 'ar' && "font-Cairo",
                )}
            >
                <div className='w-full border border-[#E4E7EC] rounded-lg shadow-lg '>
                    <div className={cn(
                        'border-b border-b-[#E4E7EC] p-4',
                        i18n.language === 'ar' && 'space-y-2'
                    )}>
                        <p className='uppercase text-muted-foreground text-[14px] leading-4'>{`${t('Order')} #${trackingNumber}`}</p>
                        <h1 className='font-semibold text-[24px] leading-8 '>
                            {currentStatus?.state}
                        </h1>
                        {currentStatus?.msg &&
                            <p className='text-muted-foreground text-[14px] leading-4'>
                                {`${currentStatus.msg} `}
                                {currentStatus?.timestamp &&
                                    <span className='text-[#0098A5]'>{`${getFormattedDate(currentStatus.timestamp, i18n.language)}`}</span>}
                            </p>
                        }

                    </div>
                    {currentStatus && stateMapper(currentStatus.code) &&
                        <div className={cn(
                            'h-[350px]',
                            'md:h-[128px]'
                        )}>
                            {/* progress Bar*/}
                            <ProgressBar state={stateMapper(currentStatus.code)} />
                        </div>}
                </div>
            </div>
        )
}

export default Progress