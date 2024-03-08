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
import { AdminappsapprovedListResponse } from '../models';
// @ts-ignore
import { AdminappsapprovedListdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AdminAppsApprovedApi - axios parameter creator
 * @export
 */
export const AdminAppsApprovedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List approved apps for an org or workspace.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.apps:read&#x60;
         * @param {number} [limit] The maximum number of items to return. Must be between 1 - 1000 both inclusive.
         * @param {string} [cursor] Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page
         * @param {string} [teamId] 
         * @param {string} [enterpriseId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (token: string, limit?: number, cursor?: string, teamId?: string, enterpriseId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('list', 'token', token)
            const localVarPath = `/admin.apps.approved.list`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.apps:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (enterpriseId !== undefined) {
                localVarQueryParameter['enterprise_id'] = enterpriseId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.apps.approved.list',
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
 * AdminAppsApprovedApi - functional programming interface
 * @export
 */
export const AdminAppsApprovedApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminAppsApprovedApiAxiosParamCreator(configuration)
    return {
        /**
         * List approved apps for an org or workspace.
         * @param {AdminAppsApprovedApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: AdminAppsApprovedApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminappsapprovedListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.token, requestParameters.limit, requestParameters.cursor, requestParameters.teamId, requestParameters.enterpriseId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminAppsApprovedApi - factory interface
 * @export
 */
export const AdminAppsApprovedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminAppsApprovedApiFp(configuration)
    return {
        /**
         * List approved apps for an org or workspace.
         * @param {AdminAppsApprovedApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: AdminAppsApprovedApiListRequest, options?: AxiosRequestConfig): AxiosPromise<AdminappsapprovedListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in AdminAppsApprovedApi.
 * @export
 * @interface AdminAppsApprovedApiListRequest
 */
export type AdminAppsApprovedApiListRequest = {
    
    /**
    * Authentication token. Requires scope: `admin.apps:read`
    * @type {string}
    * @memberof AdminAppsApprovedApiList
    */
    readonly token: string
    
    /**
    * The maximum number of items to return. Must be between 1 - 1000 both inclusive.
    * @type {number}
    * @memberof AdminAppsApprovedApiList
    */
    readonly limit?: number
    
    /**
    * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
    * @type {string}
    * @memberof AdminAppsApprovedApiList
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {string}
    * @memberof AdminAppsApprovedApiList
    */
    readonly teamId?: string
    
    /**
    * 
    * @type {string}
    * @memberof AdminAppsApprovedApiList
    */
    readonly enterpriseId?: string
    
}

/**
 * AdminAppsApprovedApiGenerated - object-oriented interface
 * @export
 * @class AdminAppsApprovedApiGenerated
 * @extends {BaseAPI}
 */
export class AdminAppsApprovedApiGenerated extends BaseAPI {
    /**
     * List approved apps for an org or workspace.
     * @param {AdminAppsApprovedApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAppsApprovedApiGenerated
     */
    public list(requestParameters: AdminAppsApprovedApiListRequest, options?: AxiosRequestConfig) {
        return AdminAppsApprovedApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}