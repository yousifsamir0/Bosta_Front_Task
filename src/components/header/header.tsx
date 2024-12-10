import { cn } from '@/lib/utils'
import NavBar from './nav-bar'
import Pin from '@/assets/pin.png'
import Search from './search-desktop'


type Props = {
    className?: string
}

const Header = ({ className }: Props) => {
    return (
        <div
            className={cn(className, "w-full")}
        >
            <div className='Hero-section h-[364px] flex flex-col justify-start items-center relative '  >
                <div className='bg-[#F3FAFB] w-full h-[338px] flex flex-col items-center justify-start gap-y-6 '>
                    <NavBar className='h-32' />
                </div>
                <div className='flex flex-col items-center justify-start w-[28.375rem] gap-y-6 absolute bottom-0'>
                    <img src={Pin} alt="Pin icon" />
                    <h1 className='text-center font-Cairo text-5xl font-bold text-[#111619]'>Track Your Order</h1>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Header