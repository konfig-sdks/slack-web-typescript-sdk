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
import { EmojiListResponse } from '../models';
// @ts-ignore
import { EmojiListdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmojiApi - axios parameter creator
 * @export
 */
export const EmojiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists custom emoji for a team.
         * @param {string} token Authentication token. Requires scope: &#x60;emoji:read&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (token: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('list', 'token', token)
            const localVarPath = `/emoji.list`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["emoji:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/emoji.list',
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
 * EmojiApi - functional programming interface
 * @export
 */
export const EmojiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmojiApiAxiosParamCreator(configuration)
    return {
        /**
         * Lists custom emoji for a team.
         * @param {EmojiApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: EmojiApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmojiListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmojiApi - factory interface
 * @export
 */
export const EmojiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmojiApiFp(configuration)
    return {
        /**
         * Lists custom emoji for a team.
         * @param {EmojiApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: EmojiApiListRequest, options?: AxiosRequestConfig): AxiosPromise<EmojiListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in EmojiApi.
 * @export
 * @interface EmojiApiListRequest
 */
export type EmojiApiListRequest = {
    
    /**
    * Authentication token. Requires scope: `emoji:read`
    * @type {string}
    * @memberof EmojiApiList
    */
    readonly token: string
    
}

/**
 * EmojiApiGenerated - object-oriented interface
 * @export
 * @class EmojiApiGenerated
 * @extends {BaseAPI}
 */
export class EmojiApiGenerated extends BaseAPI {
    /**
     * Lists custom emoji for a team.
     * @param {EmojiApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmojiApiGenerated
     */
    public list(requestParameters: EmojiApiListRequest, options?: AxiosRequestConfig) {
        return EmojiApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
