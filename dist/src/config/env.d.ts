/**
 * EnvConfig Interface
 */
export interface EnvConfig {
    baseURL: string;
    authType: string;
    companyName?: string;
    companyId?: string;
    credentials: {
        username: string;
        password: string;
        domain?: string;
    };
}
/**
 * Get EnvConfig
 */
export declare const getConfig: () => EnvConfig;
