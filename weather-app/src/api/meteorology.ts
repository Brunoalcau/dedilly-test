// eslint-disable-next-line import/named
import { QueryFunctionContext } from '@tanstack/react-query';
import axios from './axios-config';



export const weatherForecast = ({ queryKey }: QueryFunctionContext<[string | undefined, string | undefined, string]>) => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [_, lat, long] = queryKey;
    if (!lat && !long) return [];
    return axios.get(`getMeteorology?latitude=${lat}&longitude=${long}`);
}