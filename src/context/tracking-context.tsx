import { fetchAPI } from "@/lib/api";
import { TrackResponse, TransitEvent } from "@/types";
import { isAxiosError } from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

type ShipmentContextType = {
    transitEvents: TransitEvent[] | null,
    currentStatus: TransitEvent | null,
    trackingNumber: string,
    isLoading: boolean,
    error: { message: string } | null,
    fetchData: (tn: string) => void,
    updateShipmentData: ((data: TrackResponse) => void),
}


const ShipmentContext = createContext<ShipmentContextType>({
    currentStatus: null,
    transitEvents: null,
    trackingNumber: "",
    isLoading: false,
    error: null,
    fetchData: () => { },
    updateShipmentData: () => { },
});
export const useShipment = () => {
    return useContext(ShipmentContext);
};

export const ShipmentProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentStatus, setCurrentStatus] = useState<TransitEvent | null>(null);
    const [transitEvents, setTransitEvents] = useState<TransitEvent[] | null>(null);
    const [trackingNumber, setTrackingNumber] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<{ message: string } | null>(null);
    const { t, i18n } = useTranslation();
    const updateShipmentData = (data: TrackResponse) => {
        const currentMsg = data.TransitEvents?.find(e => e.timestamp === data.CurrentStatus.timestamp);
        setCurrentStatus({ ...data.CurrentStatus, msg: currentMsg?.state });
        setTransitEvents(data.TransitEvents ?? null);
        setTrackingNumber(data.TrackingNumber)
    };

    const fetchData = (tn: string) => {
        setTrackingNumber(tn);
    }

    const fetch = async () => {
        setIsLoading(true);

        try {
            const response = await fetchAPI(`${trackingNumber}`, i18n.language);
            if (response.data) {
                updateShipmentData(response.data)
            }
            setError(null);
        } catch (error) {
            if (isAxiosError(error)) {
                if (error.status === 404) {
                    setError({ message: t('404') })
                }
                else {
                    setError({ message: error.message });
                }
            } else {
                console.log(error)
            }
        }
        finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (trackingNumber) {
            fetch();
        }
    }, [trackingNumber, i18n.language])

    return (
        <ShipmentContext.Provider
            value={{
                currentStatus,
                transitEvents,
                trackingNumber,
                isLoading,
                error,
                fetchData,
                updateShipmentData
            }}
        >
            {children}
        </ShipmentContext.Provider>
    );
}


