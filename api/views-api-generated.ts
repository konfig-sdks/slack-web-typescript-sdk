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
import { ViewsOpenResponse } from '../models';
// @ts-ignore
import { ViewsOpendefaultResponse } from '../models';
// @ts-ignore
import { ViewsPublishResponse } from '../models';
// @ts-ignore
import { ViewsPublishdefaultResponse } from '../models';
// @ts-ignore
import { ViewsPushResponse } from '../models';
// @ts-ignore
import { ViewsPushdefaultResponse } from '../models';
// @ts-ignore
import { ViewsUpdateResponse } from '../models';
// @ts-ignore
import { ViewsUpdatedefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ViewsApi - axios parameter creator
 * @export
 */
export const ViewsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Open a view for a user.
         * @param {string} token Authentication token. Requires scope: &#x60;none&#x60;
         * @param {string} triggerId Exchange a trigger to post to the user.
         * @param {string} view A [view payload](https://slack.dev). This must be a JSON-encoded string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        open: async (token: string, triggerId: string, view: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('open', 'token', token)
            // verify required parameter 'triggerId' is not null or undefined
            assertParamExists('open', 'triggerId', triggerId)
            // verify required parameter 'view' is not null or undefined
            assertParamExists('open', 'view', view)
            const localVarPath = `/views.open`;
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
            if (triggerId !== undefined) {
                localVarQueryParameter['trigger_id'] = triggerId;
            }

            if (view !== undefined) {
                localVarQueryParameter['view'] = view;
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
                pathTemplate: '/views.open',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Publish a static view for a User.
         * @param {string} token Authentication token. Requires scope: &#x60;none&#x60;
         * @param {string} userId &#x60;id&#x60; of the user you want publish a view to.
         * @param {string} view A [view payload](https://slack.dev). This must be a JSON-encoded string.
         * @param {string} [hash] A string that represents view state to protect against possible race conditions.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publish: async (token: string, userId: string, view: string, hash?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('publish', 'token', token)
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('publish', 'userId', userId)
            // verify required parameter 'view' is not null or undefined
            assertParamExists('publish', 'view', view)
            const localVarPath = `/views.publish`;
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
            if (userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            if (view !== undefined) {
                localVarQueryParameter['view'] = view;
            }

            if (hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
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
                pathTemplate: '/views.publish',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Push a view onto the stack of a root view.
         * @param {string} token Authentication token. Requires scope: &#x60;none&#x60;
         * @param {string} triggerId Exchange a trigger to post to the user.
         * @param {string} view A [view payload](https://slack.dev). This must be a JSON-encoded string.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        push: async (token: string, triggerId: string, view: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('push', 'token', token)
            // verify required parameter 'triggerId' is not null or undefined
            assertParamExists('push', 'triggerId', triggerId)
            // verify required parameter 'view' is not null or undefined
            assertParamExists('push', 'view', view)
            const localVarPath = `/views.push`;
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
            if (triggerId !== undefined) {
                localVarQueryParameter['trigger_id'] = triggerId;
            }

            if (view !== undefined) {
                localVarQueryParameter['view'] = view;
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
                pathTemplate: '/views.push',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing view.
         * @param {string} token Authentication token. Requires scope: &#x60;none&#x60;
         * @param {string} [viewId] A unique identifier of the view to be updated. Either &#x60;view_id&#x60; or &#x60;external_id&#x60; is required.
         * @param {string} [externalId] A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either &#x60;view_id&#x60; or &#x60;external_id&#x60; is required.
         * @param {string} [view] A [view object](https://slack.dev). This must be a JSON-encoded string.
         * @param {string} [hash] A string that represents view state to protect against possible race conditions.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (token: string, viewId?: string, externalId?: string, view?: string, hash?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('update', 'token', token)
            const localVarPath = `/views.update`;
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
            if (viewId !== undefined) {
                localVarQueryParameter['view_id'] = viewId;
            }

            if (externalId !== undefined) {
                localVarQueryParameter['external_id'] = externalId;
            }

            if (view !== undefined) {
                localVarQueryParameter['view'] = view;
            }

            if (hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
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
                pathTemplate: '/views.update',
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
 * ViewsApi - functional programming interface
 * @export
 */
export const ViewsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ViewsApiAxiosParamCreator(configuration)
    return {
        /**
         * Open a view for a user.
         * @param {ViewsApiOpenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async open(requestParameters: ViewsApiOpenRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewsOpenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.open(requestParameters.token, requestParameters.triggerId, requestParameters.view, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Publish a static view for a User.
         * @param {ViewsApiPublishRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async publish(requestParameters: ViewsApiPublishRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewsPublishResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.publish(requestParameters.token, requestParameters.userId, requestParameters.view, requestParameters.hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Push a view onto the stack of a root view.
         * @param {ViewsApiPushRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async push(requestParameters: ViewsApiPushRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewsPushResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.push(requestParameters.token, requestParameters.triggerId, requestParameters.view, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an existing view.
         * @param {ViewsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(requestParameters: ViewsApiUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ViewsUpdateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(requestParameters.token, requestParameters.viewId, requestParameters.externalId, requestParameters.view, requestParameters.hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ViewsApi - factory interface
 * @export
 */
export const ViewsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ViewsApiFp(configuration)
    return {
        /**
         * Open a view for a user.
         * @param {ViewsApiOpenRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        open(requestParameters: ViewsApiOpenRequest, options?: AxiosRequestConfig): AxiosPromise<ViewsOpenResponse> {
            return localVarFp.open(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Publish a static view for a User.
         * @param {ViewsApiPublishRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        publish(requestParameters: ViewsApiPublishRequest, options?: AxiosRequestConfig): AxiosPromise<ViewsPublishResponse> {
            return localVarFp.publish(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Push a view onto the stack of a root view.
         * @param {ViewsApiPushRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        push(requestParameters: ViewsApiPushRequest, options?: AxiosRequestConfig): AxiosPromise<ViewsPushResponse> {
            return localVarFp.push(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing view.
         * @param {ViewsApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: ViewsApiUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<ViewsUpdateResponse> {
            return localVarFp.update(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for open operation in ViewsApi.
 * @export
 * @interface ViewsApiOpenRequest
 */
export type ViewsApiOpenRequest = {
    
    /**
    * Authentication token. Requires scope: `none`
    * @type {string}
    * @memberof ViewsApiOpen
    */
    readonly token: string
    
    /**
    * Exchange a trigger to post to the user.
    * @type {string}
    * @memberof ViewsApiOpen
    */
    readonly triggerId: string
    
    /**
    * A [view payload](https://slack.dev). This must be a JSON-encoded string.
    * @type {string}
    * @memberof ViewsApiOpen
    */
    readonly view: string
    
}

/**
 * Request parameters for publish operation in ViewsApi.
 * @export
 * @interface ViewsApiPublishRequest
 */
export type ViewsApiPublishRequest = {
    
    /**
    * Authentication token. Requires scope: `none`
    * @type {string}
    * @memberof ViewsApiPublish
    */
    readonly token: string
    
    /**
    * `id` of the user you want publish a view to.
    * @type {string}
    * @memberof ViewsApiPublish
    */
    readonly userId: string
    
    /**
    * A [view payload](https://slack.dev). This must be a JSON-encoded string.
    * @type {string}
    * @memberof ViewsApiPublish
    */
    readonly view: string
    
    /**
    * A string that represents view state to protect against possible race conditions.
    * @type {string}
    * @memberof ViewsApiPublish
    */
    readonly hash?: string
    
}

/**
 * Request parameters for push operation in ViewsApi.
 * @export
 * @interface ViewsApiPushRequest
 */
export type ViewsApiPushRequest = {
    
    /**
    * Authentication token. Requires scope: `none`
    * @type {string}
    * @memberof ViewsApiPush
    */
    readonly token: string
    
    /**
    * Exchange a trigger to post to the user.
    * @type {string}
    * @memberof ViewsApiPush
    */
    readonly triggerId: string
    
    /**
    * A [view payload](https://slack.dev). This must be a JSON-encoded string.
    * @type {string}
    * @memberof ViewsApiPush
    */
    readonly view: string
    
}

/**
 * Request parameters for update operation in ViewsApi.
 * @export
 * @interface ViewsApiUpdateRequest
 */
export type ViewsApiUpdateRequest = {
    
    /**
    * Authentication token. Requires scope: `none`
    * @type {string}
    * @memberof ViewsApiUpdate
    */
    readonly token: string
    
    /**
    * A unique identifier of the view to be updated. Either `view_id` or `external_id` is required.
    * @type {string}
    * @memberof ViewsApiUpdate
    */
    readonly viewId?: string
    
    /**
    * A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required.
    * @type {string}
    * @memberof ViewsApiUpdate
    */
    readonly externalId?: string
    
    /**
    * A [view object](https://slack.dev). This must be a JSON-encoded string.
    * @type {string}
    * @memberof ViewsApiUpdate
    */
    readonly view?: string
    
    /**
    * A string that represents view state to protect against possible race conditions.
    * @type {string}
    * @memberof ViewsApiUpdate
    */
    readonly hash?: string
    
}

/**
 * ViewsApiGenerated - object-oriented interface
 * @export
 * @class ViewsApiGenerated
 * @extends {BaseAPI}
 */
export class ViewsApiGenerated extends BaseAPI {
    /**
     * Open a view for a user.
     * @param {ViewsApiOpenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewsApiGenerated
     */
    public open(requestParameters: ViewsApiOpenRequest, options?: AxiosRequestConfig) {
        return ViewsApiFp(this.configuration).open(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Publish a static view for a User.
     * @param {ViewsApiPublishRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewsApiGenerated
     */
    public publish(requestParameters: ViewsApiPublishRequest, options?: AxiosRequestConfig) {
        return ViewsApiFp(this.configuration).publish(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Push a view onto the stack of a root view.
     * @param {ViewsApiPushRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewsApiGenerated
     */
    public push(requestParameters: ViewsApiPushRequest, options?: AxiosRequestConfig) {
        return ViewsApiFp(this.configuration).push(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an existing view.
     * @param {ViewsApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ViewsApiGenerated
     */
    public update(requestParameters: ViewsApiUpdateRequest, options?: AxiosRequestConfig) {
        return ViewsApiFp(this.configuration).update(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
