import { useQuery } from "react-query";
import { useStore } from "./useStore";
import { getData } from "../components/api/getData";

export const useApiGet = (url, options) => {
    const { setData, setLoading, setError } = useStore();

    setLoading(true);

    return useQuery(url, () => getData(url, options), {
        onSettled: () => setLoading(false),
        onSuccess: (data) => {
            setData(data);
            setLoading(false);
        },
        onError: (error) => {
            setError(error.message);
            setLoading(false);
        },
    });
};
