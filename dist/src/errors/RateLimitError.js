import { TransportError } from "./TransportError.js";
export class RateLimitError extends TransportError {
    timeout;
    retryAfter;
    constructor(message, timeout, retryAfter) {
        super(message, 429, retryAfter);
        this.timeout = timeout;
        this.retryAfter = retryAfter;
        this.name = 'RateLimitError';
    }
}
//# sourceMappingURL=RateLimitError.js.map