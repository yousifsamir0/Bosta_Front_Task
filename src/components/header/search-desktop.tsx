import { useShipment } from '@/context/tracking-context'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'


type Props = {
    className?: string
}

const Search = ({ className }: Props) => {
    const { t } = useTranslation();
    const [trackingNumber, setTrackingNumber] = useState<string>("")
    const { fetchData } = useShipment()

    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            buttonRef.current && buttonRef.current.click();
        }
    };


    return (
        <div className={cn("w-full rounded-xl overflow-hidden flex shadow-lg ", className)}>
            <input
                className=" border-r border-[#E2E8F0] p-2 w-full  focus:outline-none text-lg px-4 font-semibold"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t("Tracking No")}
            />
            <button
                ref={buttonRef}
                className="icon bg-[#E30613] w-[60px] h-[68px] flex justify-center items-center cursor-pointer"
                onClick={() => trackingNumber && fetchData(trackingNumber)}
            >
                <SearchIcon className='text-white size-[28px]' />
            </button>
        </div >
    )
}

export default Search