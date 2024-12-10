import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'


type ProgressState = "Picked Up" | "Processing" | "Out for Delivery" | "Delivered"
type Props = {
    className?: string,
    state: ProgressState
}

const ProgressBar = ({ className, state }: Props) => {

    const states: ProgressState[] = [
        'Picked Up',
        'Processing',
        'Out for Delivery',
        'Delivered',
    ]
    const statesPositions = [
        { icon: 'md:start-0 top-0', bar: 'md:w-1/6 h-1/6' },
        { icon: 'md:start-1/3 top-1/3', bar: 'md:w-3/6 h-3/6' },
        { icon: 'md:start-2/3 top-2/3', bar: 'md:w-5/6 h-5/6' },
        { icon: 'md:start-full top-full', bar: 'md:w-full h-full' },

    ]
    const stateIdx = states.findIndex(currentState => state === currentState)

    return (
        <div className={cn(
            'w-full h-full flex md:justify-center items-center md:p-0 p-4',
            '',
            className
        )}>
            <div className={cn(
                'md:w-[628px] md:h-[88px] flex md:flex-col md:justify-between items-center py-3 ',
                'w-full h-full '
            )}>
                <div className={cn(
                    'relative md:w-[487px] flex justify-center items-center md:h-4',
                    'w-4 h-[244px]'

                )}>
                    <div className={cn(
                        "md:w-full md:h-0 md:border-b-2 border-dashed border-[#D0D5DD]",
                        "border-l-2 h-full"
                    )}>
                    </div>
                    <div className={cn(
                        `absolute md:start-0 md:top-1/2 md:-translate-y-1/2 md:h-0 border-b-2 border-[#0098A5]`,
                        `border-l-2 w-0 top-0`,
                        `${statesPositions[stateIdx].bar}`

                    )}></div>
                    {states.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                'flex justify-center items-center size-4 rounded-full bg-[#0098A5] border-2 border-[#0098A5] absolute',
                                'md:-top-1/2 md:translate-y-1/2 md:-translate-x-1/2',
                                '-start-1/2 -translate-y-1/2 translate-x-1/2',
                                `${statesPositions[index].icon}`,
                                stateIdx < index && "bg-white border-[#E4E7EC]"
                            )}
                        >
                            {(stateIdx >= index) &&
                                <Check className='size-3 text-white font-bold stroke-[3px]' />
                            }
                        </div>
                    ))
                    }
                    {/* <div className='flex justify-center items-center size-4 rounded-full bg-[#0098A5] border-2 border-[#0098A5] absolute -top-1/2 start-0 translate-y-1/2 -translate-x-1/2'>
                        <Check className='size-3 text-white font-bold stroke-[3px]' />
                    </div>
                    <div className='size-4 rounded-full bg-white border-2 border-[#E4E7EC] absolute -top-1/2 start-1/3 translate-y-1/2 -translate-x-1/2'> </div>
                    <div className='size-4 rounded-full bg-white border-2 border-[#E4E7EC] absolute -top-1/2 start-2/3 translate-y-1/2 -translate-x-1/2'> </div>
                    <div className='size-4 rounded-full bg-white border-2 border-[#E4E7EC] absolute -top-1/2 start-full translate-y-1/2 -translate-x-1/2'> </div> */}

                </div>
                <div className={cn(
                    'md:w-full md:h-auto flex md:flex-row justify-between md:items-start md:ml-0 text-center',
                    'flex-col h-[328px] ml-4'
                )}>
                    {states.map((currentState, index) => (
                        <div className={cn(
                            'flex-1 flex flex-col items-start md:items-center justify-center',

                        )} key={index}>
                            <h1 className={cn(
                                'text-[14px] leading-5 font-medium mt-1 md:mt-0',
                                stateIdx < index && 'text-[#667085]',
                                stateIdx === index && 'mt-6 md:mt-0'
                            )}>{currentState}</h1>
                            {(stateIdx === index) && (true) &&// condition if state already done and has date
                                <h1 className='text-[12px] leading-4 font-normal'>{"Saturday Nov. 10"}</h1>
                            }
                        </div>
                    ))}
                    {/* <div className='flex-1'>
                        <h1 className='text-[14px] leading-5 font-medium'>Picked Up</h1>
                        <h1 className='text-[12px] leading-4 font-normal'>{"Saturday Nov. 10"}</h1>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-[14px] leading-5 '>Processing</h1>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-[14px] leading-5 '>Out for Delivery</h1>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-[14px] leading-5 '>Delivered</h1>
                    </div> */}
                </div>
            </div>

        </div >
    )
}

export default ProgressBar