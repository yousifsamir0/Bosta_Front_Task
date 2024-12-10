import { cn } from '@/lib/utils'
import ProgressBar from './progress-bar'


type Props = {
    className?: string
}

const Progress = ({ className }: Props) => {
    return (
        <div
            className={cn(className, "w-full flex justify-center font-Rubik")}
        >
            <div className='w-3/5 border border-[#E4E7EC] rounded-lg shadow-lg '>
                <div className='h-[100px] border-b border-b-[#E4E7EC] p-4'>
                    <p className='uppercase text-muted-foreground leading-4'>{"Order #1234436534"}</p>
                    <h1 className='font-semibold text-[24px] leading-8 '>
                        {"Arriving by "}
                        <span className='text-[#0098A5]'>{"Sun Nov. 13"}</span>
                    </h1>
                    <p className='text-muted-foreground leading-4'>{"Your order is expected to arrive within 2 -3 working days."}</p>

                </div>
                <div className='h-[128px]'>
                    {/* progress Bar*/}
                    <ProgressBar state='Picked Up' />
                </div>
            </div>
        </div>
    )
}

export default Progress