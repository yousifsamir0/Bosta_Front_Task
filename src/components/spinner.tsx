
import { motion } from "framer-motion"
import { Loader, Truck } from 'lucide-react'
const LoadingSpinner = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-[200px]">
            <motion.div
                animate={{
                    x: [-20, 20, -20],
                    rotate: [0, 0, 0, 5, -5, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                }}
            >
                <Truck size={48} className="text-primary" />
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-lg font-medium text-muted-foreground"
            >

            </motion.p>
            <Loader className="animate-spin " />
        </div>
    )
}

export default LoadingSpinner