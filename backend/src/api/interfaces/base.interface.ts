// types/response.ts

export interface ServiceResponse<T> {
    status: "success" | "error"; // The status of the response
    data: T | null; // The data returned in the response (could be null for error responses)
    message: string; // A message explaining the result (could be a success message or an error message)
}
