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
import { OauthAccessResponse } from '../models';
// @ts-ignore
import { OauthAccessdefaultResponse } from '../models';
// @ts-ignore
import { OauthTokenResponse } from '../models';
// @ts-ignore
import { OauthTokendefaultResponse } from '../models';
// @ts-ignore
import { Oauthv2ExchangeTokenResponse } from '../models';
// @ts-ignore
import { Oauthv2ExchangeTokendefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * OauthApi - axios parameter creator
 * @export
 */
export const OauthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {string} [clientId] Issued when you created your application.
         * @param {string} [clientSecret] Issued when you created your application.
         * @param {string} [code] The &#x60;code&#x60; param returned via the OAuth callback.
         * @param {string} [redirectUri] This must match the originally submitted URI (if one was sent).
         * @param {boolean} [singleChannel] Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        access: async (clientId?: string, clientSecret?: string, code?: string, redirectUri?: string, singleChannel?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth.access`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["none"], configuration)
            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (clientSecret !== undefined) {
                localVarQueryParameter['client_secret'] = clientSecret;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (singleChannel !== undefined) {
                localVarQueryParameter['single_channel'] = singleChannel;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/oauth.access',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {string} code The &#x60;code&#x60; param returned via the OAuth callback.
         * @param {string} [clientId] Issued when you created your application.
         * @param {string} [clientSecret] Issued when you created your application.
         * @param {string} [redirectUri] This must match the originally submitted URI (if one was sent).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeToken: async (code: string, clientId?: string, clientSecret?: string, redirectUri?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('exchangeToken', 'code', code)
            const localVarPath = `/oauth.v2.access`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["none"], configuration)
            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (clientSecret !== undefined) {
                localVarQueryParameter['client_secret'] = clientSecret;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/oauth.v2.access',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Exchanges a temporary OAuth verifier code for a workspace token.
         * @param {string} [clientId] Issued when you created your application.
         * @param {string} [clientSecret] Issued when you created your application.
         * @param {string} [code] The &#x60;code&#x60; param returned via the OAuth callback.
         * @param {string} [redirectUri] This must match the originally submitted URI (if one was sent).
         * @param {boolean} [singleChannel] Request the user to add your app only to a single channel.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        token: async (clientId?: string, clientSecret?: string, code?: string, redirectUri?: string, singleChannel?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/oauth.token`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["none"], configuration)
            if (clientId !== undefined) {
                localVarQueryParameter['client_id'] = clientId;
            }

            if (clientSecret !== undefined) {
                localVarQueryParameter['client_secret'] = clientSecret;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (redirectUri !== undefined) {
                localVarQueryParameter['redirect_uri'] = redirectUri;
            }

            if (singleChannel !== undefined) {
                localVarQueryParameter['single_channel'] = singleChannel;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/oauth.token',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OauthApi - functional programming interface
 * @export
 */
export const OauthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OauthApiAxiosParamCreator(configuration)
    return {
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {OauthApiAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async access(requestParameters: OauthApiAccessRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OauthAccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.access(requestParameters.clientId, requestParameters.clientSecret, requestParameters.code, requestParameters.redirectUri, requestParameters.singleChannel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {OauthApiExchangeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exchangeToken(requestParameters: OauthApiExchangeTokenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Oauthv2ExchangeTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchangeToken(requestParameters.code, requestParameters.clientId, requestParameters.clientSecret, requestParameters.redirectUri, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Exchanges a temporary OAuth verifier code for a workspace token.
         * @param {OauthApiTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async token(requestParameters: OauthApiTokenRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OauthTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.token(requestParameters.clientId, requestParameters.clientSecret, requestParameters.code, requestParameters.redirectUri, requestParameters.singleChannel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OauthApi - factory interface
 * @export
 */
export const OauthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OauthApiFp(configuration)
    return {
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {OauthApiAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        access(requestParameters: OauthApiAccessRequest = {}, options?: AxiosRequestConfig): AxiosPromise<OauthAccessResponse> {
            return localVarFp.access(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Exchanges a temporary OAuth verifier code for an access token.
         * @param {OauthApiExchangeTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchangeToken(requestParameters: OauthApiExchangeTokenRequest, options?: AxiosRequestConfig): AxiosPromise<Oauthv2ExchangeTokenResponse> {
            return localVarFp.exchangeToken(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Exchanges a temporary OAuth verifier code for a workspace token.
         * @param {OauthApiTokenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        token(requestParameters: OauthApiTokenRequest = {}, options?: AxiosRequestConfig): AxiosPromise<OauthTokenResponse> {
            return localVarFp.token(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for access operation in OauthApi.
 * @export
 * @interface OauthApiAccessRequest
 */
export type OauthApiAccessRequest = {
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiAccess
    */
    readonly clientId?: string
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiAccess
    */
    readonly clientSecret?: string
    
    /**
    * The `code` param returned via the OAuth callback.
    * @type {string}
    * @memberof OauthApiAccess
    */
    readonly code?: string
    
    /**
    * This must match the originally submitted URI (if one was sent).
    * @type {string}
    * @memberof OauthApiAccess
    */
    readonly redirectUri?: string
    
    /**
    * Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps).
    * @type {boolean}
    * @memberof OauthApiAccess
    */
    readonly singleChannel?: boolean
    
}

/**
 * Request parameters for exchangeToken operation in OauthApi.
 * @export
 * @interface OauthApiExchangeTokenRequest
 */
export type OauthApiExchangeTokenRequest = {
    
    /**
    * The `code` param returned via the OAuth callback.
    * @type {string}
    * @memberof OauthApiExchangeToken
    */
    readonly code: string
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiExchangeToken
    */
    readonly clientId?: string
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiExchangeToken
    */
    readonly clientSecret?: string
    
    /**
    * This must match the originally submitted URI (if one was sent).
    * @type {string}
    * @memberof OauthApiExchangeToken
    */
    readonly redirectUri?: string
    
}

/**
 * Request parameters for token operation in OauthApi.
 * @export
 * @interface OauthApiTokenRequest
 */
export type OauthApiTokenRequest = {
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiToken
    */
    readonly clientId?: string
    
    /**
    * Issued when you created your application.
    * @type {string}
    * @memberof OauthApiToken
    */
    readonly clientSecret?: string
    
    /**
    * The `code` param returned via the OAuth callback.
    * @type {string}
    * @memberof OauthApiToken
    */
    readonly code?: string
    
    /**
    * This must match the originally submitted URI (if one was sent).
    * @type {string}
    * @memberof OauthApiToken
    */
    readonly redirectUri?: string
    
    /**
    * Request the user to add your app only to a single channel.
    * @type {boolean}
    * @memberof OauthApiToken
    */
    readonly singleChannel?: boolean
    
}

/**
 * OauthApiGenerated - object-oriented interface
 * @export
 * @class OauthApiGenerated
 * @extends {BaseAPI}
 */
export class OauthApiGenerated extends BaseAPI {
    /**
     * Exchanges a temporary OAuth verifier code for an access token.
     * @param {OauthApiAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApiGenerated
     */
    public access(requestParameters: OauthApiAccessRequest = {}, options?: AxiosRequestConfig) {
        return OauthApiFp(this.configuration).access(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exchanges a temporary OAuth verifier code for an access token.
     * @param {OauthApiExchangeTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApiGenerated
     */
    public exchangeToken(requestParameters: OauthApiExchangeTokenRequest, options?: AxiosRequestConfig) {
        return OauthApiFp(this.configuration).exchangeToken(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Exchanges a temporary OAuth verifier code for a workspace token.
     * @param {OauthApiTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OauthApiGenerated
     */
    public token(requestParameters: OauthApiTokenRequest = {}, options?: AxiosRequestConfig) {
        return OauthApiFp(this.configuration).token(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
