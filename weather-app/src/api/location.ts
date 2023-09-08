import axios from './axios-config';
// eslint-disable-next-line import/named
import { QueryFunctionContext } from '@tanstack/react-query';



export const getSearchAdrees = async ({ queryKey }: QueryFunctionContext<[string, string | null | undefined]>) => {
    try {
        // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
        const [_, address] = queryKey;
        const response = await axios.get(`?search=${address}`);
        return response;
    } catch (e) {
        console.log(e);
    }
}