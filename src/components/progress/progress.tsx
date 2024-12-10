import { cn, getFormattedDate } from '@/lib/utils'
import ProgressBar from './progress-bar'
import { useShipment } from '@/context/tracking-context'




const stateMapper = (state: string) => {
    return (state === 'Received at warehouse') ? "Processing" :
        (state === 'Out for delivery') ? "Out for Delivery" :
            (state === 'Delivered') ? "Delivered" :
                (state === 'Preparing for shipment') ? "New" :
                    (state === 'Order is under review') ? "New" :
                        (state === 'Returned') ? "Cancelled" : null
}

type Props = {
    className?: string
}

const Progress = ({ className }: Props) => {

    const {
        currentStatus,
        trackingNumber

    } = useShipment();

    return (
        <div
            className={cn(className, "w-full flex justify-center font-Rubik")}
        >
            <div className='w-full border border-[#E4E7EC] rounded-lg shadow-lg '>
                <div className='border-b border-b-[#E4E7EC] p-4'>
                    <p className='uppercase text-muted-foreground text-[14px] leading-4'>{`Order #${trackingNumber}`}</p>
                    <h1 className='font-semibold text-[24px] leading-8 '>
                        {currentStatus?.state}
                    </h1>
                    {currentStatus?.msg &&
                        <p className='text-muted-foreground text-[14px] leading-4'>
                            {`${currentStatus.msg} `}
                            {currentStatus?.timestamp &&
                                <span className='text-[#0098A5]'>{`${getFormattedDate(currentStatus.timestamp)}`}</span>}
                        </p>
                    }

                </div>
                {currentStatus && stateMapper(currentStatus.state) &&
                    <div className={cn(
                        'h-[350px]',
                        'md:h-[128px]'
                    )}>
                        {/* progress Bar*/}
                        <ProgressBar state={stateMapper(currentStatus.state)} />
                    </div>}
            </div>
        </div>
    )
}

export default Progress