import {useState, useEffect} from 'react';
import {OpenMeteoResponse } from '../types/DashboardTypes';

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&hourly=temperature_2m&timezone=auto'

export default function useFetchData(): OpenMeteoResponse | null {
    const [data, setData] = useState<OpenMeteoResponse | null>(null);

    useEffect(() =>{
        const getData  = async() =>{
            const response = await fetch(API_URL);
            const json: OpenMeteoResponse = await response.json();
            setData(json)
        } 

        getData();
    }, []);

    return data
}
//retorna un objeto de tipo openMeteoResponse o null