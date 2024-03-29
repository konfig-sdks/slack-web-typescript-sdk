/* tslint:disable */
/* eslint-disable */
/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PinsAddRequest } from '../models';
// @ts-ignore
import { PinsAddResponse } from '../models';
// @ts-ignore
import { PinsAdddefaultResponse } from '../models';
// @ts-ignore
import { PinsListResponseInner } from '../models';
// @ts-ignore
import { PinsListdefaultResponse } from '../models';
// @ts-ignore
import { PinsRemoveRequest } from '../models';
// @ts-ignore
import { PinsRemoveResponse } from '../models';
// @ts-ignore
import { PinsRemovedefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PinsApi - axios parameter creator
 * @export
 */
export const PinsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Pins an item to a channel.
         * @param {string} token Authentication token. Requires scope: &#x60;pins:write&#x60;
         * @param {string} channel Channel to pin the item in.
         * @param {PinsAddRequest} pinsAddRequest 
         * @param {string} [timestamp] Timestamp of the message to pin.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        add: async (token: string, channel: string, pinsAddRequest: PinsAddRequest, timestamp?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('add', 'token', token)
            // verify required parameter 'channel' is not null or undefined
            assertParamExists('add', 'channel', channel)
            // verify required parameter 'pinsAddRequest' is not null or undefined
            assertParamExists('add', 'pinsAddRequest', pinsAddRequest)
            const localVarPath = `/pins.add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication slackAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["pins:write"], configuration)
            if (token != null) {
                localVarHeaderParameter['token'] = String(token);
            }


            if (channel !== undefined) {
                await addFormParam('channel', channel, false, true)
            }
    
            if (timestamp !== undefined) {
                await addFormParam('timestamp', timestamp, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: pinsAddRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/pins.add',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(pinsAddRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists items pinned to a channel.
         * @param {string} token Authentication token. Requires scope: &#x60;pins:read&#x60;
         * @param {string} channel Channel to get pinned items for.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (token: string, channel: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('list', 'token', token)
            // verify required parameter 'channel' is not null or undefined
            assertParamExists('list', 'channel', channel)
            const localVarPath = `/pins.list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication slackAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["pins:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (channel !== undefined) {
                localVarQueryParameter['channel'] = channel;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/pins.list',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Un-pins an item from a channel.
         * @param {string} token Authentication token. Requires scope: &#x60;pins:write&#x60;
         * @param {string} channel Channel where the item is pinned to.
         * @param {PinsRemoveRequest} pinsRemoveRequest 
         * @param {string} [timestamp] Timestamp of the message to un-pin.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove: async (token: string, channel: string, pinsRemoveRequest: PinsRemoveRequest, timestamp?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('remove', 'token', token)
            // verify required parameter 'channel' is not null or undefined
            assertParamExists('remove', 'channel', channel)
            // verify required parameter 'pinsRemoveRequest' is not null or undefined
            assertParamExists('remove', 'pinsRemoveRequest', pinsRemoveRequest)
            const localVarPath = `/pins.remove`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication slackAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["pins:write"], configuration)
            if (token != null) {
                localVarHeaderParameter['token'] = String(token);
            }


            if (channel !== undefined) {
                await addFormParam('channel', channel, false, true)
            }
    
            if (timestamp !== undefined) {
                await addFormParam('timestamp', timestamp, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: pinsRemoveRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/pins.remove',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(pinsRemoveRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PinsApi - functional programming interface
 * @export
 */
export const PinsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PinsApiAxiosParamCreator(configuration)
    return {
        /**
         * Pins an item to a channel.
         * @param {PinsApiAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async add(requestParameters: PinsApiAddRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PinsAddResponse>> {
            const pinsAddRequest: PinsAddRequest = {
                channel: requestParameters.channel,
                timestamp: requestParameters.timestamp
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.add(requestParameters.token, requestParameters.channel, pinsAddRequest, requestParameters.timestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists items pinned to a channel.
         * @param {PinsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: PinsApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PinsListResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.token, requestParameters.channel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Un-pins an item from a channel.
         * @param {PinsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async remove(requestParameters: PinsApiRemoveRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PinsRemoveResponse>> {
            const pinsRemoveRequest: PinsRemoveRequest = {
                channel: requestParameters.channel,
                timestamp: requestParameters.timestamp
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.remove(requestParameters.token, requestParameters.channel, pinsRemoveRequest, requestParameters.timestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PinsApi - factory interface
 * @export
 */
export const PinsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PinsApiFp(configuration)
    return {
        /**
         * Pins an item to a channel.
         * @param {PinsApiAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        add(requestParameters: PinsApiAddRequest, options?: AxiosRequestConfig): AxiosPromise<PinsAddResponse> {
            return localVarFp.add(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists items pinned to a channel.
         * @param {PinsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: PinsApiListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<PinsListResponseInner>> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Un-pins an item from a channel.
         * @param {PinsApiRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        remove(requestParameters: PinsApiRemoveRequest, options?: AxiosRequestConfig): AxiosPromise<PinsRemoveResponse> {
            return localVarFp.remove(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for add operation in PinsApi.
 * @export
 * @interface PinsApiAddRequest
 */
export type PinsApiAddRequest = {
    
    /**
    * Authentication token. Requires scope: `pins:write`
    * @type {string}
    * @memberof PinsApiAdd
    */
    readonly token: string
    
    /**
    * Channel to pin the item in.
    * @type {string}
    * @memberof PinsApiAdd
    */
    readonly channel: string
    
    /**
    * Timestamp of the message to pin.
    * @type {string}
    * @memberof PinsApiAdd
    */
    readonly timestamp?: string
    
} & PinsAddRequest

/**
 * Request parameters for list operation in PinsApi.
 * @export
 * @interface PinsApiListRequest
 */
export type PinsApiListRequest = {
    
    /**
    * Authentication token. Requires scope: `pins:read`
    * @type {string}
    * @memberof PinsApiList
    */
    readonly token: string
    
    /**
    * Channel to get pinned items for.
    * @type {string}
    * @memberof PinsApiList
    */
    readonly channel: string
    
}

/**
 * Request parameters for remove operation in PinsApi.
 * @export
 * @interface PinsApiRemoveRequest
 */
export type PinsApiRemoveRequest = {
    
    /**
    * Authentication token. Requires scope: `pins:write`
    * @type {string}
    * @memberof PinsApiRemove
    */
    readonly token: string
    
    /**
    * Channel where the item is pinned to.
    * @type {string}
    * @memberof PinsApiRemove
    */
    readonly channel: string
    
    /**
    * Timestamp of the message to un-pin.
    * @type {string}
    * @memberof PinsApiRemove
    */
    readonly timestamp?: string
    
} & PinsRemoveRequest

/**
 * PinsApiGenerated - object-oriented interface
 * @export
 * @class PinsApiGenerated
 * @extends {BaseAPI}
 */
export class PinsApiGenerated extends BaseAPI {
    /**
     * Pins an item to a channel.
     * @param {PinsApiAddRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PinsApiGenerated
     */
    public add(requestParameters: PinsApiAddRequest, options?: AxiosRequestConfig) {
        return PinsApiFp(this.configuration).add(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists items pinned to a channel.
     * @param {PinsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PinsApiGenerated
     */
    public list(requestParameters: PinsApiListRequest, options?: AxiosRequestConfig) {
        return PinsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Un-pins an item from a channel.
     * @param {PinsApiRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PinsApiGenerated
     */
    public remove(requestParameters: PinsApiRemoveRequest, options?: AxiosRequestConfig) {
        return PinsApiFp(this.configuration).remove(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
