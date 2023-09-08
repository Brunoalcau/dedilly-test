import { useQuery } from "@tanstack/react-query";
import { weatherForecast } from '../api/meteorology'


export const useWeatherForecast = (lat: string | undefined = '', long: string | undefined = '') => {

    const result = useQuery({
        //ts-ignore
        queryKey: ['search', lat, long],
        queryFn: weatherForecast
    });

    return result;
}