import { useQuery } from "@tanstack/react-query";
import { getSearchAdrees } from '../api/location';


export const lookAddress = (search: string) => {
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const result = useQuery({
            queryKey: ['search', search],
            queryFn: getSearchAdrees
        });
        return result;
    } catch (e) {
        console.log(e);
    }

}