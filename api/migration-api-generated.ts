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
import { MigrationExchangeResponse } from '../models';
// @ts-ignore
import { MigrationExchangedefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MigrationApi - axios parameter creator
 * @export
 */
export const MigrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * For Enterprise Grid workspaces, map local user IDs to global user IDs
         * @param {string} token Authentication token. Requires scope: &#x60;tokens.basic&#x60;
         * @param {string} users A comma-separated list of user ids, up to 400 per request
         * @param {string} [teamId] Specify team_id starts with &#x60;T&#x60; in case of Org Token
         * @param {boolean} [toOld] Specify &#x60;true&#x60; to convert &#x60;W&#x60; global user IDs to workspace-specific &#x60;U&#x60; IDs. Defaults to &#x60;false&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchange: async (token: string, users: string, teamId?: string, toOld?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('exchange', 'token', token)
            // verify required parameter 'users' is not null or undefined
            assertParamExists('exchange', 'users', users)
            const localVarPath = `/migration.exchange`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["tokens.basic"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (users !== undefined) {
                localVarQueryParameter['users'] = users;
            }

            if (teamId !== undefined) {
                localVarQueryParameter['team_id'] = teamId;
            }

            if (toOld !== undefined) {
                localVarQueryParameter['to_old'] = toOld;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/migration.exchange',
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
 * MigrationApi - functional programming interface
 * @export
 */
export const MigrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MigrationApiAxiosParamCreator(configuration)
    return {
        /**
         * For Enterprise Grid workspaces, map local user IDs to global user IDs
         * @param {MigrationApiExchangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async exchange(requestParameters: MigrationApiExchangeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MigrationExchangeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.exchange(requestParameters.token, requestParameters.users, requestParameters.teamId, requestParameters.toOld, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MigrationApi - factory interface
 * @export
 */
export const MigrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MigrationApiFp(configuration)
    return {
        /**
         * For Enterprise Grid workspaces, map local user IDs to global user IDs
         * @param {MigrationApiExchangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        exchange(requestParameters: MigrationApiExchangeRequest, options?: AxiosRequestConfig): AxiosPromise<MigrationExchangeResponse> {
            return localVarFp.exchange(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for exchange operation in MigrationApi.
 * @export
 * @interface MigrationApiExchangeRequest
 */
export type MigrationApiExchangeRequest = {
    
    /**
    * Authentication token. Requires scope: `tokens.basic`
    * @type {string}
    * @memberof MigrationApiExchange
    */
    readonly token: string
    
    /**
    * A comma-separated list of user ids, up to 400 per request
    * @type {string}
    * @memberof MigrationApiExchange
    */
    readonly users: string
    
    /**
    * Specify team_id starts with `T` in case of Org Token
    * @type {string}
    * @memberof MigrationApiExchange
    */
    readonly teamId?: string
    
    /**
    * Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`.
    * @type {boolean}
    * @memberof MigrationApiExchange
    */
    readonly toOld?: boolean
    
}

/**
 * MigrationApiGenerated - object-oriented interface
 * @export
 * @class MigrationApiGenerated
 * @extends {BaseAPI}
 */
export class MigrationApiGenerated extends BaseAPI {
    /**
     * For Enterprise Grid workspaces, map local user IDs to global user IDs
     * @param {MigrationApiExchangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationApiGenerated
     */
    public exchange(requestParameters: MigrationApiExchangeRequest, options?: AxiosRequestConfig) {
        return MigrationApiFp(this.configuration).exchange(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
