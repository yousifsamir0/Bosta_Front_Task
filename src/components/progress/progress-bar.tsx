import { cn } from '@/lib/utils'
import { stat } from 'fs'
import { Check } from 'lucide-react'
import React from 'react'

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
        { icon: '0', bar: '1/6' },
        { icon: '1/3', bar: '3/6' },
        { icon: '2/3', bar: '5/6' },
        { icon: 'full', bar: 'full' },

    ]
    const stateIdx = states.findIndex(currentState => state === currentState)

    return (
        <div className={cn('w-full h-full flex justify-center items-center', className)}>
            <div className='w-[628px] h-[88px] flex flex-col justify-between items-center  py-3 '>
                <div className='relative w-[487px] flex justify-center items-center h-4'>
                    <div className="w-full border-b-2 border-dashed border-[#D0D5DD]">
                    </div>

                    <div className={`absolute start-0 w-${statesPositions[stateIdx].bar} border-b-2 border-[#0098A5] `}></div>
                    {states.map((currentState, index) => (
                        <div
                            key={index}
                            className={cn(
                                'flex justify-center items-center size-4 rounded-full bg-[#0098A5] border-2 border-[#0098A5] absolute -top-1/2 start-0 translate-y-1/2 -translate-x-1/2',
                                `start-${statesPositions[index].icon}`,
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
                <div className='w-full flex justify-between items-start text-center'>
                    {states.map((currentState, index) => (
                        <div className='flex-1' key={index}>
                            <h1 className={cn(
                                'text-[14px] leading-5 font-medium',
                                stateIdx < index && 'text-[#667085]'
                            )}>{currentState}</h1>
                            {(stateIdx >= index) && (true) &&// condition if state already done and has date
                                < h1 className='text-[12px] leading-4 font-normal'>{"Saturday Nov. 10"}</h1>
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