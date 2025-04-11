import { NTLMAuthHandler } from "./handlers/NTLMAuthHandler.js";
import { BasicAuthHandler } from "./handlers/BasicAuthHandler.js";
;
/**
 * Create AuthHandler Factory
 */
export function CreateAuthHandler(type, credentials) {
    switch (type.toString().trim().toLowerCase()) {
        case 'basic':
            return new BasicAuthHandler(credentials.username, credentials.password);
        case 'ntlm':
            return new NTLMAuthHandler({ username: credentials.username, password: credentials.password, domain: credentials.domain || '' });
        default:
            throw new Error(`Unsupported authentication type: ${type}`);
    }
}
//# sourceMappingURL=AuthFactory.js.map