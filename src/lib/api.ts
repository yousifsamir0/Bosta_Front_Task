import { TrackResponse } from "@/types";
import axios from "axios"


const API_ENDPOINT = (n: string) => `https://tracking.bosta.co/shipments/track/${n}`;

export const fetchAPI = async (trackingNum: string) => {
    return await axios.get<TrackResponse>(API_ENDPOINT(trackingNum), {
        headers: {
            'x-requested-by': 'Bosta'
        }
    });
}