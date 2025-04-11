import { AxiosInstance } from "axios";
import { AuthHandler } from "../AuthHandler.js";
import { AxiosRequestConfig as ThirdPartyAxiosRequestConfig } from "axios-ntlm";
/**
 * Basic Authetication Utility
 */
export declare class BasicAuthHandler implements AuthHandler {
    private username;
    private password;
    constructor(username: string, password: string);
    authenticate(config: ThirdPartyAxiosRequestConfig): AxiosInstance;
}
