export class TransportError extends Error {
    statusCode;
    data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(message, statusCode, data) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.name = 'TransportError';
    }
}
//# sourceMappingURL=TransportError.js.map