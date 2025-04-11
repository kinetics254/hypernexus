import dotenv from "dotenv";
/**
 * Load environment variables
 */
dotenv.config();
/**
 * Get EnvConfig
 */
export const getConfig = () => {
    const baseURL = process.env.BC_API_BASE_URL || 'https://<your-domain>:<port>/<instnace>';
    const authType = process.env.BC_AUTH_TYPE || 'ntlm';
    const companyName = process.env.BC_COMPANY_NAME || '';
    const companyId = process.env.BC_COMPANY_ID || '';
    const credentials = {
        username: process.env.BC_USERNAME || '',
        password: process.env.BC_PASSWORD || '',
        domain: process.env.BC_DOMAIN || '',
    };
    if (!credentials.username || !credentials.password) {
        throw new Error('BC_USERNAME and BC_PASSWORD are required');
    }
    return {
        baseURL,
        authType,
        companyName,
        companyId,
        credentials,
    };
};
//# sourceMappingURL=env.js.map