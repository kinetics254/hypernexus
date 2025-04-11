import { TransportError } from "./TransportError.js";
export declare class TimeoutError extends TransportError {
    timeout?: number | undefined;
    data?: any | undefined;
    constructor(message: string, timeout?: number | undefined, data?: any | undefined);
}
