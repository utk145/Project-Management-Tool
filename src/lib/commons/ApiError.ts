class ApiError extends Error {
    statusCode: number;
    data: any;
    message: string;
    success: boolean;
    errors: any[];

    constructor(
        statusCode: number,
        message = "Something is wrong..",
        errors = [],
        stack: string = "",
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            // To keep track of the stack trace of errors
            // If a stack trace is provided, use it
            this.stack = stack;
        } else {
            // Otherwise, capture the stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
