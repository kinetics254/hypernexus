import { AxiosRequestConfig } from 'axios';
import { AuthHandler } from '../auth/AuthHandler.js';
/**
 * Trnasport Config interfacace
 */
export interface TransportConfig {
    baseURL: string;
    timeout?: number;
    cacheTTL?: number;
    maxSockets?: number;
    maxFreeSockets?: number;
    company?: string;
}
/**
 * Request Options Interface
 */
export interface RequestOptions {
    company?: string;
    data?: never;
    headers?: Record<string, string>;
    params?: never;
    primaryKey?: [string];
    useCache?: boolean;
}
/**
 * A class that handles HTTP transport operations with caching, rate limiting, and authentication capabilities.
 *
 * @class Transport
 *
 * @property {AuthHandler} authHandler - Handles authentication for requests
 * @property {string} baseURL - Base URL for all requests
 * @property {string} defaultCompany - Default company name for requests
 * @property {NodeCache} cache - Caching mechanism for requests
 * @property {Bottleneck} limiter - Rate limiter for requests
 * @property {Array<Function>} middleware - Array of middleware functions for request modification
 * @property {AxiosInstance} axiosInstance - Axios instance for making HTTP requests
 * @property {pino.Logger} logger - Logger instance for request/response logging
 *
 * @method get<T> - Performs GET requests with optional caching
 * @method post<T> - Performs POST requests
 * @method patch<T> - Performs PATCH requests with primary key handling
 * @method put<T> - Performs PUT requests with primary key handling
 * @method delete<T> - Performs DELETE requests with primary key handling
 * @method cu<T> - Performs codeunit requests
 * @method batch<T> - Executes multiple requests in parallel or sequentially
 * @method filter - Creates OData filter query strings
 * @method clearCache - Clears cache for specific endpoint
 * @method clearAllCaches - Clears all cached data
 *
 * @example
 * ```typescript
 * const transport = new Transport(config, authHandler);
 *
 * // GET request with caching
 * const data = await transport.get<UserData>('/users', { id: 1 }, { useCache: true });
 *
 * // POST request
 * const newUser = await transport.post<UserData>('/users', { name: 'John' });
 *
 * // Batch request
 * const results = await transport.batch<UserData>([
 *   { method: 'GET', url: '/users/1' },
 *   { method: 'GET', url: '/users/2' }
 * ]);
 * ```
 *
 * @throws {TransportError} When a request fails
 * @throws {RateLimitError} When rate limit is exceeded
 * @throws {TimeoutError} When request times out
 */
export declare class Transport {
    private authHandler;
    private baseURL;
    private defaultCompany;
    private cache;
    private limiter;
    private middleware;
    private axiosInstance;
    private logger;
    constructor(config: TransportConfig, authHandler: AuthHandler);
    get<T>(endpoint: string, queryParams?: Record<string, any>, options?: RequestOptions): Promise<T>;
    post<T>(endpoint: string, payload?: any, options?: RequestOptions): Promise<T>;
    patch<T>(endpoint: string, payload?: any, options?: RequestOptions): Promise<T>;
    put<T>(endpoint: string, payload?: any, options?: RequestOptions): Promise<T>;
    delete<T>(endpoint: string, payload?: any, options?: RequestOptions): Promise<T>;
    /**
     * Makes a POST request to a codeunit endpoint with optional payload and request options
     * @template T - The expected response type
     * @param {string} codeunit - The codeunit endpoint URL
     * @param {any} [payload] - Optional request payload/body data
     * @param {RequestOptions} [options] - Optional request configuration options
     * @returns {Promise<T>} Promise that resolves with the response data
     * @throws {TransportError} When the request fails with status code 500
     */
    cu<T>(codeunit: string, payload?: any, options?: RequestOptions): Promise<T>;
    /**
     * Executes multiple HTTP requests in parallel or sequentially
     * @template T - The expected response type for all requests
     * @param request - Array of Axios request configurations to be executed
     * @param dependent - If true, requests are executed sequentially and will fail if any request fails.
     *                   If false, requests are executed in parallel and failures are filtered out.
     * @returns Promise resolving to an array of successful responses of type T
     * @throws {TransportError} When all requests fail or dependent requests have a failure
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
     */
    batch<T>(request: AxiosRequestConfig[], dependent?: boolean): Promise<T[]>;
    private prepareString;
    private isValidDate;
    /**
     * Creates an OData filter query string from the provided parameters
     * @param params - An object containing key-value pairs to be converted into filter conditions
     * @returns An object with the '$filter' property containing the generated OData filter string, or undefined if no valid parameters
     * @throws {TransportError} When there is an error preparing the BC 365 filter query
     *
     * @remarks
     * - Handles different value types and formats them appropriately for OData filtering
     * - Special handling for date strings vs regular strings
     * - Combines multiple conditions with 'and' operator
     * - Empty or falsy values are skipped
     *
     * @example
     * ```typescript
     * filter({ name: "John", age: 30 })
     * // Returns: { $filter: "name eq 'John' and age eq 30" }
     * ```
     */
    filter(params: Record<string, any>): object | undefined;
    private addMiddleware;
    clearCache(endpoint: string, options?: RequestOptions): void;
    clearAllCaches(): void;
    private getCacheKey;
    private invalidateCache;
    private isUUID;
    private extractPrimaryKeys;
    private limitedRequest;
    private request;
}
