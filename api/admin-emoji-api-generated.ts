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
import { AdminemojiAddEmojiRequest } from '../models';
// @ts-ignore
import { AdminemojiAddEmojiResponse } from '../models';
// @ts-ignore
import { AdminemojiAddEmojidefaultResponse } from '../models';
// @ts-ignore
import { AdminemojiAliasAddRequest } from '../models';
// @ts-ignore
import { AdminemojiAliasAddResponse } from '../models';
// @ts-ignore
import { AdminemojiAliasAdddefaultResponse } from '../models';
// @ts-ignore
import { AdminemojiListEnterpriseEmojiResponse } from '../models';
// @ts-ignore
import { AdminemojiListEnterpriseEmojidefaultResponse } from '../models';
// @ts-ignore
import { AdminemojiRemoveEnterpriseEmojiRequest } from '../models';
// @ts-ignore
import { AdminemojiRemoveEnterpriseEmojiResponse } from '../models';
// @ts-ignore
import { AdminemojiRemoveEnterpriseEmojidefaultResponse } from '../models';
// @ts-ignore
import { AdminemojiRenameEmojiRequest } from '../models';
// @ts-ignore
import { AdminemojiRenameEmojiResponse } from '../models';
// @ts-ignore
import { AdminemojiRenameEmojidefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AdminEmojiApi - axios parameter creator
 * @export
 */
export const AdminEmojiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add an emoji.
         * @param {string} name The name of the emoji to be removed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.teams:write&#x60;
         * @param {string} url The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.
         * @param {AdminemojiAddEmojiRequest} adminemojiAddEmojiRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEmoji: async (name: string, token: string, url: string, adminemojiAddEmojiRequest: AdminemojiAddEmojiRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('addEmoji', 'name', name)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('addEmoji', 'token', token)
            // verify required parameter 'url' is not null or undefined
            assertParamExists('addEmoji', 'url', url)
            // verify required parameter 'adminemojiAddEmojiRequest' is not null or undefined
            assertParamExists('addEmoji', 'adminemojiAddEmojiRequest', adminemojiAddEmojiRequest)
            const localVarPath = `/admin.emoji.add`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.teams:write"], configuration)

            if (name !== undefined) {
                await addFormParam('name', name, false, true)
            }
    
            if (token !== undefined) {
                await addFormParam('token', token, false, true)
            }
    
            if (url !== undefined) {
                await addFormParam('url', url, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: adminemojiAddEmojiRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.emoji.add',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(adminemojiAddEmojiRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add an emoji alias.
         * @param {string} aliasFor The alias of the emoji.
         * @param {string} name The name of the emoji to be aliased. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.teams:write&#x60;
         * @param {AdminemojiAliasAddRequest} adminemojiAliasAddRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aliasAdd: async (aliasFor: string, name: string, token: string, adminemojiAliasAddRequest: AdminemojiAliasAddRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aliasFor' is not null or undefined
            assertParamExists('aliasAdd', 'aliasFor', aliasFor)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('aliasAdd', 'name', name)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('aliasAdd', 'token', token)
            // verify required parameter 'adminemojiAliasAddRequest' is not null or undefined
            assertParamExists('aliasAdd', 'adminemojiAliasAddRequest', adminemojiAliasAddRequest)
            const localVarPath = `/admin.emoji.addAlias`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.teams:write"], configuration)

            if (aliasFor !== undefined) {
                await addFormParam('alias_for', aliasFor, false, true)
            }
    
            if (name !== undefined) {
                await addFormParam('name', name, false, true)
            }
    
            if (token !== undefined) {
                await addFormParam('token', token, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: adminemojiAliasAddRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.emoji.addAlias',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(adminemojiAliasAddRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List emoji for an Enterprise Grid organization.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.teams:read&#x60;
         * @param {string} [cursor] Set &#x60;cursor&#x60; to &#x60;next_cursor&#x60; returned by the previous call to list items in the next page
         * @param {number} [limit] The maximum number of items to return. Must be between 1 - 1000 both inclusive.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEnterpriseEmoji: async (token: string, cursor?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('listEnterpriseEmoji', 'token', token)
            const localVarPath = `/admin.emoji.list`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.teams:read"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.emoji.list',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove an emoji across an Enterprise Grid organization
         * @param {string} name The name of the emoji to be removed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.teams:write&#x60;
         * @param {AdminemojiRemoveEnterpriseEmojiRequest} adminemojiRemoveEnterpriseEmojiRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeEnterpriseEmoji: async (name: string, token: string, adminemojiRemoveEnterpriseEmojiRequest: AdminemojiRemoveEnterpriseEmojiRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('removeEnterpriseEmoji', 'name', name)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('removeEnterpriseEmoji', 'token', token)
            // verify required parameter 'adminemojiRemoveEnterpriseEmojiRequest' is not null or undefined
            assertParamExists('removeEnterpriseEmoji', 'adminemojiRemoveEnterpriseEmojiRequest', adminemojiRemoveEnterpriseEmojiRequest)
            const localVarPath = `/admin.emoji.remove`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.teams:write"], configuration)

            if (name !== undefined) {
                await addFormParam('name', name, false, true)
            }
    
            if (token !== undefined) {
                await addFormParam('token', token, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: adminemojiRemoveEnterpriseEmojiRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.emoji.remove',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(adminemojiRemoveEnterpriseEmojiRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Rename an emoji.
         * @param {string} name The name of the emoji to be renamed. Colons (&#x60;:myemoji:&#x60;) around the value are not required, although they may be included.
         * @param {string} newName The new name of the emoji.
         * @param {string} token Authentication token. Requires scope: &#x60;admin.teams:write&#x60;
         * @param {AdminemojiRenameEmojiRequest} adminemojiRenameEmojiRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameEmoji: async (name: string, newName: string, token: string, adminemojiRenameEmojiRequest: AdminemojiRenameEmojiRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('renameEmoji', 'name', name)
            // verify required parameter 'newName' is not null or undefined
            assertParamExists('renameEmoji', 'newName', newName)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('renameEmoji', 'token', token)
            // verify required parameter 'adminemojiRenameEmojiRequest' is not null or undefined
            assertParamExists('renameEmoji', 'adminemojiRenameEmojiRequest', adminemojiRenameEmojiRequest)
            const localVarPath = `/admin.emoji.rename`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["admin.teams:write"], configuration)

            if (name !== undefined) {
                await addFormParam('name', name, false, true)
            }
    
            if (newName !== undefined) {
                await addFormParam('new_name', newName, false, true)
            }
    
            if (token !== undefined) {
                await addFormParam('token', token, false, true)
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
    
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: adminemojiRenameEmojiRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/admin.emoji.rename',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(adminemojiRenameEmojiRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminEmojiApi - functional programming interface
 * @export
 */
export const AdminEmojiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminEmojiApiAxiosParamCreator(configuration)
    return {
        /**
         * Add an emoji.
         * @param {AdminEmojiApiAddEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addEmoji(requestParameters: AdminEmojiApiAddEmojiRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminemojiAddEmojiResponse>> {
            const adminemojiAddEmojiRequest: AdminemojiAddEmojiRequest = {
                name: requestParameters.name,
                token: requestParameters.token,
                url: requestParameters.url
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.addEmoji(requestParameters.name, requestParameters.token, requestParameters.url, adminemojiAddEmojiRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Add an emoji alias.
         * @param {AdminEmojiApiAliasAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aliasAdd(requestParameters: AdminEmojiApiAliasAddRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminemojiAliasAddResponse>> {
            const adminemojiAliasAddRequest: AdminemojiAliasAddRequest = {
                alias_for: requestParameters.alias_for,
                name: requestParameters.name,
                token: requestParameters.token
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.aliasAdd(requestParameters.aliasFor, requestParameters.name, requestParameters.token, adminemojiAliasAddRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List emoji for an Enterprise Grid organization.
         * @param {AdminEmojiApiListEnterpriseEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEnterpriseEmoji(requestParameters: AdminEmojiApiListEnterpriseEmojiRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminemojiListEnterpriseEmojiResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEnterpriseEmoji(requestParameters.token, requestParameters.cursor, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove an emoji across an Enterprise Grid organization
         * @param {AdminEmojiApiRemoveEnterpriseEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeEnterpriseEmoji(requestParameters: AdminEmojiApiRemoveEnterpriseEmojiRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminemojiRemoveEnterpriseEmojiResponse>> {
            const adminemojiRemoveEnterpriseEmojiRequest: AdminemojiRemoveEnterpriseEmojiRequest = {
                name: requestParameters.name,
                token: requestParameters.token
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeEnterpriseEmoji(requestParameters.name, requestParameters.token, adminemojiRemoveEnterpriseEmojiRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Rename an emoji.
         * @param {AdminEmojiApiRenameEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renameEmoji(requestParameters: AdminEmojiApiRenameEmojiRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminemojiRenameEmojiResponse>> {
            const adminemojiRenameEmojiRequest: AdminemojiRenameEmojiRequest = {
                name: requestParameters.name,
                new_name: requestParameters.new_name,
                token: requestParameters.token
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.renameEmoji(requestParameters.name, requestParameters.newName, requestParameters.token, adminemojiRenameEmojiRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminEmojiApi - factory interface
 * @export
 */
export const AdminEmojiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminEmojiApiFp(configuration)
    return {
        /**
         * Add an emoji.
         * @param {AdminEmojiApiAddEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEmoji(requestParameters: AdminEmojiApiAddEmojiRequest, options?: AxiosRequestConfig): AxiosPromise<AdminemojiAddEmojiResponse> {
            return localVarFp.addEmoji(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Add an emoji alias.
         * @param {AdminEmojiApiAliasAddRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aliasAdd(requestParameters: AdminEmojiApiAliasAddRequest, options?: AxiosRequestConfig): AxiosPromise<AdminemojiAliasAddResponse> {
            return localVarFp.aliasAdd(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List emoji for an Enterprise Grid organization.
         * @param {AdminEmojiApiListEnterpriseEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEnterpriseEmoji(requestParameters: AdminEmojiApiListEnterpriseEmojiRequest, options?: AxiosRequestConfig): AxiosPromise<AdminemojiListEnterpriseEmojiResponse> {
            return localVarFp.listEnterpriseEmoji(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove an emoji across an Enterprise Grid organization
         * @param {AdminEmojiApiRemoveEnterpriseEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeEnterpriseEmoji(requestParameters: AdminEmojiApiRemoveEnterpriseEmojiRequest, options?: AxiosRequestConfig): AxiosPromise<AdminemojiRemoveEnterpriseEmojiResponse> {
            return localVarFp.removeEnterpriseEmoji(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Rename an emoji.
         * @param {AdminEmojiApiRenameEmojiRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renameEmoji(requestParameters: AdminEmojiApiRenameEmojiRequest, options?: AxiosRequestConfig): AxiosPromise<AdminemojiRenameEmojiResponse> {
            return localVarFp.renameEmoji(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for addEmoji operation in AdminEmojiApi.
 * @export
 * @interface AdminEmojiApiAddEmojiRequest
 */
export type AdminEmojiApiAddEmojiRequest = {
    
    /**
    * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    * @type {string}
    * @memberof AdminEmojiApiAddEmoji
    */
    readonly name: string
    
    /**
    * Authentication token. Requires scope: `admin.teams:write`
    * @type {string}
    * @memberof AdminEmojiApiAddEmoji
    */
    readonly token: string
    
    /**
    * The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.
    * @type {string}
    * @memberof AdminEmojiApiAddEmoji
    */
    readonly url: string
    
} & AdminemojiAddEmojiRequest

/**
 * Request parameters for aliasAdd operation in AdminEmojiApi.
 * @export
 * @interface AdminEmojiApiAliasAddRequest
 */
export type AdminEmojiApiAliasAddRequest = {
    
    /**
    * The alias of the emoji.
    * @type {string}
    * @memberof AdminEmojiApiAliasAdd
    */
    readonly aliasFor: string
    
    /**
    * The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included.
    * @type {string}
    * @memberof AdminEmojiApiAliasAdd
    */
    readonly name: string
    
    /**
    * Authentication token. Requires scope: `admin.teams:write`
    * @type {string}
    * @memberof AdminEmojiApiAliasAdd
    */
    readonly token: string
    
} & AdminemojiAliasAddRequest

/**
 * Request parameters for listEnterpriseEmoji operation in AdminEmojiApi.
 * @export
 * @interface AdminEmojiApiListEnterpriseEmojiRequest
 */
export type AdminEmojiApiListEnterpriseEmojiRequest = {
    
    /**
    * Authentication token. Requires scope: `admin.teams:read`
    * @type {string}
    * @memberof AdminEmojiApiListEnterpriseEmoji
    */
    readonly token: string
    
    /**
    * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page
    * @type {string}
    * @memberof AdminEmojiApiListEnterpriseEmoji
    */
    readonly cursor?: string
    
    /**
    * The maximum number of items to return. Must be between 1 - 1000 both inclusive.
    * @type {number}
    * @memberof AdminEmojiApiListEnterpriseEmoji
    */
    readonly limit?: number
    
}

/**
 * Request parameters for removeEnterpriseEmoji operation in AdminEmojiApi.
 * @export
 * @interface AdminEmojiApiRemoveEnterpriseEmojiRequest
 */
export type AdminEmojiApiRemoveEnterpriseEmojiRequest = {
    
    /**
    * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    * @type {string}
    * @memberof AdminEmojiApiRemoveEnterpriseEmoji
    */
    readonly name: string
    
    /**
    * Authentication token. Requires scope: `admin.teams:write`
    * @type {string}
    * @memberof AdminEmojiApiRemoveEnterpriseEmoji
    */
    readonly token: string
    
} & AdminemojiRemoveEnterpriseEmojiRequest

/**
 * Request parameters for renameEmoji operation in AdminEmojiApi.
 * @export
 * @interface AdminEmojiApiRenameEmojiRequest
 */
export type AdminEmojiApiRenameEmojiRequest = {
    
    /**
    * The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included.
    * @type {string}
    * @memberof AdminEmojiApiRenameEmoji
    */
    readonly name: string
    
    /**
    * The new name of the emoji.
    * @type {string}
    * @memberof AdminEmojiApiRenameEmoji
    */
    readonly newName: string
    
    /**
    * Authentication token. Requires scope: `admin.teams:write`
    * @type {string}
    * @memberof AdminEmojiApiRenameEmoji
    */
    readonly token: string
    
} & AdminemojiRenameEmojiRequest

/**
 * AdminEmojiApiGenerated - object-oriented interface
 * @export
 * @class AdminEmojiApiGenerated
 * @extends {BaseAPI}
 */
export class AdminEmojiApiGenerated extends BaseAPI {
    /**
     * Add an emoji.
     * @param {AdminEmojiApiAddEmojiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmojiApiGenerated
     */
    public addEmoji(requestParameters: AdminEmojiApiAddEmojiRequest, options?: AxiosRequestConfig) {
        return AdminEmojiApiFp(this.configuration).addEmoji(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add an emoji alias.
     * @param {AdminEmojiApiAliasAddRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmojiApiGenerated
     */
    public aliasAdd(requestParameters: AdminEmojiApiAliasAddRequest, options?: AxiosRequestConfig) {
        return AdminEmojiApiFp(this.configuration).aliasAdd(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List emoji for an Enterprise Grid organization.
     * @param {AdminEmojiApiListEnterpriseEmojiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmojiApiGenerated
     */
    public listEnterpriseEmoji(requestParameters: AdminEmojiApiListEnterpriseEmojiRequest, options?: AxiosRequestConfig) {
        return AdminEmojiApiFp(this.configuration).listEnterpriseEmoji(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove an emoji across an Enterprise Grid organization
     * @param {AdminEmojiApiRemoveEnterpriseEmojiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmojiApiGenerated
     */
    public removeEnterpriseEmoji(requestParameters: AdminEmojiApiRemoveEnterpriseEmojiRequest, options?: AxiosRequestConfig) {
        return AdminEmojiApiFp(this.configuration).removeEnterpriseEmoji(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rename an emoji.
     * @param {AdminEmojiApiRenameEmojiRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmojiApiGenerated
     */
    public renameEmoji(requestParameters: AdminEmojiApiRenameEmojiRequest, options?: AxiosRequestConfig) {
        return AdminEmojiApiFp(this.configuration).renameEmoji(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}