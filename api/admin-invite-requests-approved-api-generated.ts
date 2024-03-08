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
import { AdmininviteRequestsapprovedListResponse } from '../models';
// @ts-ignore
import { AdmininviteRequestsapprovedListdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AdminInviteRequestsApprovedApi - axios parameter creator
 * @export
 */
export const AdminInviteRequestsApprovedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List all approved workspace invite requests.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.invites:read&#x60;
         * @param {string} [teamId] ID for the workspace where the invite requests were made.
         * @param {string} [cursor] Value of the &#x60;next_cursor&#x60; field sent as part of the previous API response
         * @param {number} [limit] The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (token: string, teamId?: string, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('list', 'token', token)
            const localVarPath = `/admin.inviteRequests.approved.list`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.invites:read"], configuration)
            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (token != null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.inviteRequests.approved.list',
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
 * AdminInviteRequestsApprovedApi - functional programming interface
 * @export
 */
export const AdminInviteRequestsApprovedApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminInviteRequestsApprovedApiAxiosParamCreator(configuration)
    return {
        /**
         * List all approved workspace invite requests.
         * @param {AdminInviteRequestsApprovedApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: AdminInviteRequestsApprovedApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdmininviteRequestsapprovedListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.token, requestParameters.teamId, requestParameters.cursor, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminInviteRequestsApprovedApi - factory interface
 * @export
 */
export const AdminInviteRequestsApprovedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminInviteRequestsApprovedApiFp(configuration)
    return {
        /**
         * List all approved workspace invite requests.
         * @param {AdminInviteRequestsApprovedApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: AdminInviteRequestsApprovedApiListRequest, options?: AxiosRequestConfig): AxiosPromise<AdmininviteRequestsapprovedListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in AdminInviteRequestsApprovedApi.
 * @export
 * @interface AdminInviteRequestsApprovedApiListRequest
 */
export type AdminInviteRequestsApprovedApiListRequest = {
    
    /**
    * Authentication token. Requires scope: `admin.invites:read`
    * @type {string}
    * @memberof AdminInviteRequestsApprovedApiList
    */
    readonly token: string
    
    /**
    * ID for the workspace where the invite requests were made.
    * @type {string}
    * @memberof AdminInviteRequestsApprovedApiList
    */
    readonly teamId?: string
    
    /**
    * Value of the `next_cursor` field sent as part of the previous API response
    * @type {string}
    * @memberof AdminInviteRequestsApprovedApiList
    */
    readonly cursor?: string
    
    /**
    * The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive
    * @type {number}
    * @memberof AdminInviteRequestsApprovedApiList
    */
    readonly limit?: number
    
}

/**
 * AdminInviteRequestsApprovedApiGenerated - object-oriented interface
 * @export
 * @class AdminInviteRequestsApprovedApiGenerated
 * @extends {BaseAPI}
 */
export class AdminInviteRequestsApprovedApiGenerated extends BaseAPI {
    /**
     * List all approved workspace invite requests.
     * @param {AdminInviteRequestsApprovedApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminInviteRequestsApprovedApiGenerated
     */
    public list(requestParameters: AdminInviteRequestsApprovedApiListRequest, options?: AxiosRequestConfig) {
        return AdminInviteRequestsApprovedApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}