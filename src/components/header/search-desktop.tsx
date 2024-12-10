import { useShipment } from '@/context/tracking-context'
import { fetchAPI } from '@/lib/api'
import { cn } from '@/lib/utils'
import { isAxiosError } from 'axios'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'


type Props = {
    className?: string
}

const Search = ({ className }: Props) => {

    const [trackingNumber, setTrackingNumber] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<{ error: string } | null>(null)

    const { updateShipmentData } = useShipment()

    const fetch = async () => {
        setIsLoading(true);

        try {
            const response = await fetchAPI(`${trackingNumber}`);
            if (response.data) {
                console.log(response.data)
                updateShipmentData(response.data)
            }
        } catch (error) {
            if (isAxiosError(error)) {
                setError({ error: error.message });
            } else {
                console.log(error)
            }
        }
        finally {
            setIsLoading(false);
            console.log(trackingNumber)
        }
    }



    return (
        <div className={cn(className, "w-full rounded-xl overflow-hidden flex shadow-lg ")}>
            <input
                className=" border-r border-[#E2E8F0] p-2 w-full  focus:outline-none text-lg px-4 font-semibold"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Tracking No."
            />
            <div
                className="icon bg-[#E30613] w-[60px] h-[68px] flex justify-center items-center cursor-pointer"
                onClick={fetch}
            >
                <SearchIcon className='text-white size-[28px]' />
            </div>
        </div>
    )
}

export default Search