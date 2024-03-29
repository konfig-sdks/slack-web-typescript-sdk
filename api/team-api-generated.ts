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
import { TeamAccessLogsResponse } from '../models';
// @ts-ignore
import { TeamAccessLogsdefaultResponse } from '../models';
// @ts-ignore
import { TeamBillableInfoResponse } from '../models';
// @ts-ignore
import { TeamBillableInfodefaultResponse } from '../models';
// @ts-ignore
import { TeamInfoResponse } from '../models';
// @ts-ignore
import { TeamInfodefaultResponse } from '../models';
// @ts-ignore
import { TeamIntegrationLogsResponse } from '../models';
// @ts-ignore
import { TeamIntegrationLogsdefaultResponse } from '../models';
// @ts-ignore
import { TeamprofileGetProfileResponse } from '../models';
// @ts-ignore
import { TeamprofileGetProfiledefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TeamApi - axios parameter creator
 * @export
 */
export const TeamApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Gets the access logs for the current team.
         * @param {string} token Authentication token. Requires scope: &#x60;admin&#x60;
         * @param {string} [before] End of time range of logs to include in results (inclusive).
         * @param {string} [count] 
         * @param {string} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessLogs: async (token: string, before?: string, count?: string, page?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('accessLogs', 'token', token)
            const localVarPath = `/team.accessLogs`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (before !== undefined) {
                localVarQueryParameter['before'] = before;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/team.accessLogs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets billable users information for the current team.
         * @param {string} token Authentication token. Requires scope: &#x60;admin&#x60;
         * @param {string} [user] A user to retrieve the billable information for. Defaults to all users.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        billableInfo: async (token: string, user?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('billableInfo', 'token', token)
            const localVarPath = `/team.billableInfo`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/team.billableInfo',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a team\'s profile.
         * @param {string} token Authentication token. Requires scope: &#x60;users.profile:read&#x60;
         * @param {string} [visibility] Filter by visibility.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile: async (token: string, visibility?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('getProfile', 'token', token)
            const localVarPath = `/team.profile.get`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["users.profile:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (visibility !== undefined) {
                localVarQueryParameter['visibility'] = visibility;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/team.profile.get',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets information about the current team.
         * @param {string} token Authentication token. Requires scope: &#x60;team:read&#x60;
         * @param {string} [team] Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        info: async (token: string, team?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('info', 'token', token)
            const localVarPath = `/team.info`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["team:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (team !== undefined) {
                localVarQueryParameter['team'] = team;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/team.info',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets the integration logs for the current team.
         * @param {string} token Authentication token. Requires scope: &#x60;admin&#x60;
         * @param {string} [appId] Filter logs to this Slack app. Defaults to all logs.
         * @param {string} [changeType] Filter logs with this change type. Defaults to all logs.
         * @param {string} [count] 
         * @param {string} [page] 
         * @param {string} [serviceId] Filter logs to this service. Defaults to all logs.
         * @param {string} [user] Filter logs generated by this user’s actions. Defaults to all logs.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrationLogs: async (token: string, appId?: string, changeType?: string, count?: string, page?: string, serviceId?: string, user?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('integrationLogs', 'token', token)
            const localVarPath = `/team.integrationLogs`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }

            if (changeType !== undefined) {
                localVarQueryParameter['change_type'] = changeType;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/team.integrationLogs',
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
 * TeamApi - functional programming interface
 * @export
 */
export const TeamApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TeamApiAxiosParamCreator(configuration)
    return {
        /**
         * Gets the access logs for the current team.
         * @param {TeamApiAccessLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessLogs(requestParameters: TeamApiAccessLogsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamAccessLogsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accessLogs(requestParameters.token, requestParameters.before, requestParameters.count, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets billable users information for the current team.
         * @param {TeamApiBillableInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async billableInfo(requestParameters: TeamApiBillableInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamBillableInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.billableInfo(requestParameters.token, requestParameters.user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve a team\'s profile.
         * @param {TeamApiGetProfileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfile(requestParameters: TeamApiGetProfileRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamprofileGetProfileResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProfile(requestParameters.token, requestParameters.visibility, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets information about the current team.
         * @param {TeamApiInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async info(requestParameters: TeamApiInfoRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.info(requestParameters.token, requestParameters.team, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets the integration logs for the current team.
         * @param {TeamApiIntegrationLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async integrationLogs(requestParameters: TeamApiIntegrationLogsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TeamIntegrationLogsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.integrationLogs(requestParameters.token, requestParameters.appId, requestParameters.changeType, requestParameters.count, requestParameters.page, requestParameters.serviceId, requestParameters.user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TeamApi - factory interface
 * @export
 */
export const TeamApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TeamApiFp(configuration)
    return {
        /**
         * Gets the access logs for the current team.
         * @param {TeamApiAccessLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessLogs(requestParameters: TeamApiAccessLogsRequest, options?: AxiosRequestConfig): AxiosPromise<TeamAccessLogsResponse> {
            return localVarFp.accessLogs(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets billable users information for the current team.
         * @param {TeamApiBillableInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        billableInfo(requestParameters: TeamApiBillableInfoRequest, options?: AxiosRequestConfig): AxiosPromise<TeamBillableInfoResponse> {
            return localVarFp.billableInfo(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a team\'s profile.
         * @param {TeamApiGetProfileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile(requestParameters: TeamApiGetProfileRequest, options?: AxiosRequestConfig): AxiosPromise<TeamprofileGetProfileResponse> {
            return localVarFp.getProfile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets information about the current team.
         * @param {TeamApiInfoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        info(requestParameters: TeamApiInfoRequest, options?: AxiosRequestConfig): AxiosPromise<TeamInfoResponse> {
            return localVarFp.info(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets the integration logs for the current team.
         * @param {TeamApiIntegrationLogsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        integrationLogs(requestParameters: TeamApiIntegrationLogsRequest, options?: AxiosRequestConfig): AxiosPromise<TeamIntegrationLogsResponse> {
            return localVarFp.integrationLogs(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for accessLogs operation in TeamApi.
 * @export
 * @interface TeamApiAccessLogsRequest
 */
export type TeamApiAccessLogsRequest = {
    
    /**
    * Authentication token. Requires scope: `admin`
    * @type {string}
    * @memberof TeamApiAccessLogs
    */
    readonly token: string
    
    /**
    * End of time range of logs to include in results (inclusive).
    * @type {string}
    * @memberof TeamApiAccessLogs
    */
    readonly before?: string
    
    /**
    * 
    * @type {string}
    * @memberof TeamApiAccessLogs
    */
    readonly count?: string
    
    /**
    * 
    * @type {string}
    * @memberof TeamApiAccessLogs
    */
    readonly page?: string
    
}

/**
 * Request parameters for billableInfo operation in TeamApi.
 * @export
 * @interface TeamApiBillableInfoRequest
 */
export type TeamApiBillableInfoRequest = {
    
    /**
    * Authentication token. Requires scope: `admin`
    * @type {string}
    * @memberof TeamApiBillableInfo
    */
    readonly token: string
    
    /**
    * A user to retrieve the billable information for. Defaults to all users.
    * @type {string}
    * @memberof TeamApiBillableInfo
    */
    readonly user?: string
    
}

/**
 * Request parameters for getProfile operation in TeamApi.
 * @export
 * @interface TeamApiGetProfileRequest
 */
export type TeamApiGetProfileRequest = {
    
    /**
    * Authentication token. Requires scope: `users.profile:read`
    * @type {string}
    * @memberof TeamApiGetProfile
    */
    readonly token: string
    
    /**
    * Filter by visibility.
    * @type {string}
    * @memberof TeamApiGetProfile
    */
    readonly visibility?: string
    
}

/**
 * Request parameters for info operation in TeamApi.
 * @export
 * @interface TeamApiInfoRequest
 */
export type TeamApiInfoRequest = {
    
    /**
    * Authentication token. Requires scope: `team:read`
    * @type {string}
    * @memberof TeamApiInfo
    */
    readonly token: string
    
    /**
    * Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels
    * @type {string}
    * @memberof TeamApiInfo
    */
    readonly team?: string
    
}

/**
 * Request parameters for integrationLogs operation in TeamApi.
 * @export
 * @interface TeamApiIntegrationLogsRequest
 */
export type TeamApiIntegrationLogsRequest = {
    
    /**
    * Authentication token. Requires scope: `admin`
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly token: string
    
    /**
    * Filter logs to this Slack app. Defaults to all logs.
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly appId?: string
    
    /**
    * Filter logs with this change type. Defaults to all logs.
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly changeType?: string
    
    /**
    * 
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly count?: string
    
    /**
    * 
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly page?: string
    
    /**
    * Filter logs to this service. Defaults to all logs.
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly serviceId?: string
    
    /**
    * Filter logs generated by this user’s actions. Defaults to all logs.
    * @type {string}
    * @memberof TeamApiIntegrationLogs
    */
    readonly user?: string
    
}

/**
 * TeamApiGenerated - object-oriented interface
 * @export
 * @class TeamApiGenerated
 * @extends {BaseAPI}
 */
export class TeamApiGenerated extends BaseAPI {
    /**
     * Gets the access logs for the current team.
     * @param {TeamApiAccessLogsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApiGenerated
     */
    public accessLogs(requestParameters: TeamApiAccessLogsRequest, options?: AxiosRequestConfig) {
        return TeamApiFp(this.configuration).accessLogs(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets billable users information for the current team.
     * @param {TeamApiBillableInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApiGenerated
     */
    public billableInfo(requestParameters: TeamApiBillableInfoRequest, options?: AxiosRequestConfig) {
        return TeamApiFp(this.configuration).billableInfo(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a team\'s profile.
     * @param {TeamApiGetProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApiGenerated
     */
    public getProfile(requestParameters: TeamApiGetProfileRequest, options?: AxiosRequestConfig) {
        return TeamApiFp(this.configuration).getProfile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets information about the current team.
     * @param {TeamApiInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApiGenerated
     */
    public info(requestParameters: TeamApiInfoRequest, options?: AxiosRequestConfig) {
        return TeamApiFp(this.configuration).info(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets the integration logs for the current team.
     * @param {TeamApiIntegrationLogsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamApiGenerated
     */
    public integrationLogs(requestParameters: TeamApiIntegrationLogsRequest, options?: AxiosRequestConfig) {
        return TeamApiFp(this.configuration).integrationLogs(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
