import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'


type Props = {
    className?: string
}

const Search = ({ className }: Props) => {
    return (
        <div className={cn(className, "w-full rounded-xl overflow-hidden flex shadow-lg ")}>
            <input
                className=" border-r border-[#E2E8F0] p-2 w-full  focus:outline-none text-lg px-4 font-semibold"
                type="text"
                placeholder="Search..."
            />
            <div className="icon bg-[#E30613] w-[60px] h-[68px]   flex justify-center items-center">
                <SearchIcon className='text-white size-[28px]' />

            </div>
        </div>
    )
}

export default Search