import { ApiError, ErrorDetailsDescriptor } from './apiError';

export class RouteNotFoundError extends ApiError {
    _statusCode = 404;
    _message: string;
    _details = null;

    constructor(message: string) {
        super(message);
        this._message = message;

        Object.setPrototypeOf(this, RouteNotFoundError.prototype);
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get message(): string {
        return this._message;
    }

    get details(): ErrorDetailsDescriptor {
        return this._details;
    }
}