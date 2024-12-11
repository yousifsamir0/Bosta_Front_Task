import { TrackResponse } from "@/types";
import axios from "axios"


const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const API_ENDPOINT = (n: string) => `https://tracking.bosta.co/shipments/track/${n}`;

export const fetchAPI = async (trackingNum: string, lng = 'en') => {
    const response = await axios.get<TrackResponse>(API_ENDPOINT(trackingNum), {
        headers: {
            'x-requested-by': 'Bosta'
        },
        params: {
            lang: lng
        }
    });
    await sleep(500);
    return response;
}