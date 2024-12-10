import { TrackResponse, TransitEvent } from "@/types";
import React, { createContext, useState, useContext } from "react";

type ShipmentContextType = {
    transitEvents: TransitEvent[] | null,
    currentStatus: TransitEvent | null,
    trackingNumber: string,
    updateShipmentData: ((data: TrackResponse) => void),
}


const ShipmentContext = createContext<ShipmentContextType>({
    currentStatus: null,
    transitEvents: null,
    trackingNumber: "",

    updateShipmentData: () => { },
});
export const useShipment = () => {
    return useContext(ShipmentContext);
};

export const ShipmentProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentStatus, setCurrentStatus] = useState<TransitEvent | null>(null);
    const [transitEvents, setTransitEvents] = useState<TransitEvent[] | null>(null);
    const [trackingNumber, setTrackingNumber] = useState<string>("")

    const updateShipmentData = (data: TrackResponse) => {
        const currentMsg = data.TransitEvents?.find(e => e.timestamp === data.CurrentStatus.timestamp);
        setCurrentStatus({ ...data.CurrentStatus, msg: currentMsg?.state });
        setTransitEvents(data.TransitEvents ?? null);
        setTrackingNumber(data.TrackingNumber)
    };

    return (
        <ShipmentContext.Provider
            value={{
                currentStatus,
                transitEvents,
                trackingNumber,
                updateShipmentData
            }}
        >
            {children}
        </ShipmentContext.Provider>
    );
}


