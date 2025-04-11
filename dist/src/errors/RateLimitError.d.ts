import { TransportError } from "./TransportError.js";
export declare class RateLimitError extends TransportError {
    timeout?: number | undefined;
    retryAfter?: number | undefined;
    constructor(message: string, timeout?: number | undefined, retryAfter?: number | undefined);
}
