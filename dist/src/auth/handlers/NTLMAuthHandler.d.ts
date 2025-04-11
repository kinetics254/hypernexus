import { NtlmCredentials, AxiosRequestConfig } from "axios-ntlm";
import { AxiosInstance } from 'axios';
import { AuthHandler } from "../AuthHandler.js";
/**
 * NTLM AUTHHANDLER
 */
export declare class NTLMAuthHandler implements AuthHandler {
    private config;
    constructor(config: NtlmCredentials);
    authenticate(axiosConfig: AxiosRequestConfig): AxiosInstance;
}
