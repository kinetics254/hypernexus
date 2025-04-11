import { TransportError } from "./TransportError.js";
export class TimeoutError extends TransportError {
    timeout;
    data;
    constructor(message, timeout, data) {
        super(message, timeout, data);
        this.timeout = timeout;
        this.data = data;
        this.name = 'TimeoutError';
    }
}
//# sourceMappingURL=TimeoutError.js.map