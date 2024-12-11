import { useShipment } from '@/context/tracking-context'
import { useTranslation } from 'react-i18next'


const ErrorMessage = () => {
    const { t } = useTranslation()
    const { trackingNumber, error } = useShipment()
    return (
        <div className='w-[460px] min-h-20 p-4 flex flex-col bg-rose-200 border border-rose-500 rounded-md justify-start items-center'>
            <div className='uppercase '>{`${t('Order')} #${trackingNumber}`}</div>
            <div className=''>{error?.message}</div>
        </div>
    )
}

export default ErrorMessage