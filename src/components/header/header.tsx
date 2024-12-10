import { cn } from '@/lib/utils'
import NavBar from './nav-bar'
import Pin from '@/assets/pin.png'
import PinMobile from '@/assets/pin-mobile.png'
import Search from './search-desktop'


type Props = {
    className?: string
}

const Header = ({ className }: Props) => {
    return (
        <>
            {/* DeskTop header */}
            <div
                className={cn(className, "w-full md:block hidden ")}
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
            {/* Mobile Header */}
            <div className='w-full md:hidden block'>
                <NavBar className='h-14 shadow-sm' />
                <div className='w-full p-4'>
                    <div className='bg-[#F3FAFB] flex flex-col justify-start items-center p-2'>
                        <img src={PinMobile} alt="Pin icon" />
                        <h1 className='text-center font-Poppens text-[20px] leading-7 font-semibold text-[#111619]'>Track Your Order</h1>
                        <h1 className='text-center font-Lato text-[15px] leading-5 font-normal text-[#111619]'>All order updates will be available through this link.</h1>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Header