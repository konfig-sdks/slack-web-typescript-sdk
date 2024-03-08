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
import { SearchMessagesResponse } from '../models';
// @ts-ignore
import { SearchMessagesdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export const SearchApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Searches for messages matching a query.
         * @param {string} token Authentication token. Requires scope: &#x60;search:read&#x60;
         * @param {string} query Search query.
         * @param {number} [count] Pass the number of results you want per \&quot;page\&quot;. Maximum of &#x60;100&#x60;.
         * @param {boolean} [highlight] Pass a value of &#x60;true&#x60; to enable query highlight markers (see below).
         * @param {number} [page] 
         * @param {string} [sort] Return matches sorted by either &#x60;score&#x60; or &#x60;timestamp&#x60;.
         * @param {string} [sortDir] Change sort direction to ascending (&#x60;asc&#x60;) or descending (&#x60;desc&#x60;).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messages: async (token: string, query: string, count?: number, highlight?: boolean, page?: number, sort?: string, sortDir?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('messages', 'token', token)
            // verify required parameter 'query' is not null or undefined
            assertParamExists('messages', 'query', query)
            const localVarPath = `/search.messages`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["search:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (highlight !== undefined) {
                localVarQueryParameter['highlight'] = highlight;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/search.messages',
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
 * SearchApi - functional programming interface
 * @export
 */
export const SearchApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SearchApiAxiosParamCreator(configuration)
    return {
        /**
         * Searches for messages matching a query.
         * @param {SearchApiMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async messages(requestParameters: SearchApiMessagesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchMessagesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.messages(requestParameters.token, requestParameters.query, requestParameters.count, requestParameters.highlight, requestParameters.page, requestParameters.sort, requestParameters.sortDir, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SearchApi - factory interface
 * @export
 */
export const SearchApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SearchApiFp(configuration)
    return {
        /**
         * Searches for messages matching a query.
         * @param {SearchApiMessagesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messages(requestParameters: SearchApiMessagesRequest, options?: AxiosRequestConfig): AxiosPromise<SearchMessagesResponse> {
            return localVarFp.messages(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for messages operation in SearchApi.
 * @export
 * @interface SearchApiMessagesRequest
 */
export type SearchApiMessagesRequest = {
    
    /**
    * Authentication token. Requires scope: `search:read`
    * @type {string}
    * @memberof SearchApiMessages
    */
    readonly token: string
    
    /**
    * Search query.
    * @type {string}
    * @memberof SearchApiMessages
    */
    readonly query: string
    
    /**
    * Pass the number of results you want per \"page\". Maximum of `100`.
    * @type {number}
    * @memberof SearchApiMessages
    */
    readonly count?: number
    
    /**
    * Pass a value of `true` to enable query highlight markers (see below).
    * @type {boolean}
    * @memberof SearchApiMessages
    */
    readonly highlight?: boolean
    
    /**
    * 
    * @type {number}
    * @memberof SearchApiMessages
    */
    readonly page?: number
    
    /**
    * Return matches sorted by either `score` or `timestamp`.
    * @type {string}
    * @memberof SearchApiMessages
    */
    readonly sort?: string
    
    /**
    * Change sort direction to ascending (`asc`) or descending (`desc`).
    * @type {string}
    * @memberof SearchApiMessages
    */
    readonly sortDir?: string
    
}

/**
 * SearchApiGenerated - object-oriented interface
 * @export
 * @class SearchApiGenerated
 * @extends {BaseAPI}
 */
export class SearchApiGenerated extends BaseAPI {
    /**
     * Searches for messages matching a query.
     * @param {SearchApiMessagesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApiGenerated
     */
    public messages(requestParameters: SearchApiMessagesRequest, options?: AxiosRequestConfig) {
        return SearchApiFp(this.configuration).messages(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}