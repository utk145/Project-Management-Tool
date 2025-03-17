// Internal imports
import { client } from "@/lib/rpc";
// External Libraries
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<
    (typeof client.api.v1.auth.register)["$post"]
>;

type RequestType = InferRequestType<
    (typeof client.api.v1.auth.register)["$post"]
>;

export const useSignUp = () => {
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            const response = await client.api.v1.auth.register.$post({ json });
            return response.json();
        },
    });
    return mutation;
};
