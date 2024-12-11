import { useShipment } from "@/context/tracking-context"
import Progress from "./progress/progress"
import TrackingEvents from "./Tracking/tracking-events"
import LoadingSpinner from "./spinner"
import ErrorMessage from "./error-message"

const ContentWrapper = () => {
    const { isLoading, error } = useShipment()

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) {
        return (
            <ErrorMessage />
        )
    }



    return (
        <>
            <Progress className="mb-6" />
            <TrackingEvents />
        </>
    )
}

export default ContentWrapper