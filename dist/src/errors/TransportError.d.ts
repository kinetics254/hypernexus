export declare class TransportError extends Error {
    statusCode?: number | undefined;
    data?: any | undefined;
    constructor(message: string, statusCode?: number | undefined, data?: any | undefined);
}
