import { Transport } from "./src/transport/Transport.js";
import { CreateAuthHandler } from "./src/auth/AuthFactory.js";
import { getConfig } from "./src/config/env.js";
import { TransportError } from "./src/errors/TransportError.js";
import { RateLimitError } from "./src/errors/RateLimitError.js";
import { TimeoutError } from "./src/errors/TimeoutError.js";
declare const transport: Transport;
export { Transport, CreateAuthHandler, getConfig, TransportError, RateLimitError, TimeoutError, transport };
