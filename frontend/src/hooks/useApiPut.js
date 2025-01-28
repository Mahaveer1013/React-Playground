
import { useMutation } from "react-query";
import { useStore } from "./useStore";
import { putData } from "../components/api/putData";

export const useApiPut = (url, options) => {
    const { setData, setLoading, setError } = useStore();

    const mutation = useMutation(
        (body) => putData(url, body, options),
        {
            onMutate: () => {
                setLoading(true);
                setError(null);
            },
            onSuccess: (data) => {
                setData(data);
                setLoading(false);
            },
            onError: (error) => {
                setError(error.message);
                setLoading(false);
            },
            onSettled: () => {
                setLoading(false);
            },
        }
    );

    return mutation;
};
