import { AuthHandler } from "./AuthHandler.js";
export interface Credentials {
    username: string;
    password: string;
    domain?: string;
}
/**
 * Create AuthHandler Factory
 */
export declare function CreateAuthHandler(type: string, credentials: Credentials): AuthHandler;
