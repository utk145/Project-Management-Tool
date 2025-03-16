class ApiResponse {
    statusCode: number;
    data: any; // #LATER: Use a more specific type if possible (e.g., `T` for generics)
    message: string;
    success: boolean;

    constructor(statusCode: number, data: any, message: string = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400; // Success status codes are less than 400
        // Resouce: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    }
}

export { ApiResponse };
