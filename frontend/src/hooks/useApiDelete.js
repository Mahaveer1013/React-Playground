import { useMutation } from "react-query";
import { deleteData } from "../components/api/deleteData";
import { useStore } from "./useStore";

export const useApiDelete = (url, options) => {
    const { setData, setLoading, setError } = useStore();

    const mutation = useMutation(
        () => deleteData(url, options),
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