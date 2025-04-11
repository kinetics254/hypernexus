import { NtlmClient } from "axios-ntlm";
/**
 * NTLM AUTHHANDLER
 */
export class NTLMAuthHandler {
    config;
    constructor(config) {
        this.config = config;
    }
    authenticate(axiosConfig) {
        try {
            const client = NtlmClient(this.config, axiosConfig);
            return client;
        }
        catch (error) {
            throw new Error(`NTLM authentication failed: ${error}`);
        }
    }
}
//# sourceMappingURL=NTLMAuthHandler.js.map