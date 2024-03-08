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
import { RtmConnectResponse } from '../models';
// @ts-ignore
import { RtmConnectdefaultResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RtmApi - axios parameter creator
 * @export
 */
export const RtmApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Starts a Real Time Messaging session.
         * @param {string} token Authentication token. Requires scope: &#x60;rtm:stream&#x60;
         * @param {boolean} [batchPresenceAware] Batch presence deliveries via subscription. Enabling changes the shape of &#x60;presence_change&#x60; events. See [batch presence](https://slack.dev).
         * @param {boolean} [presenceSub] Only deliver presence events when requested by subscription. See [presence subscriptions](https://slack.dev).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect: async (token: string, batchPresenceAware?: boolean, presenceSub?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('connect', 'token', token)
            const localVarPath = `/rtm.connect`;
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
            await setOAuthToObject(localVarHeaderParameter, "slackAuth", ["rtm:stream"], configuration)
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (batchPresenceAware !== undefined) {
                localVarQueryParameter['batch_presence_aware'] = batchPresenceAware;
            }

            if (presenceSub !== undefined) {
                localVarQueryParameter['presence_sub'] = presenceSub;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/rtm.connect',
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
 * RtmApi - functional programming interface
 * @export
 */
export const RtmApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RtmApiAxiosParamCreator(configuration)
    return {
        /**
         * Starts a Real Time Messaging session.
         * @param {RtmApiConnectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async connect(requestParameters: RtmApiConnectRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RtmConnectResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.connect(requestParameters.token, requestParameters.batchPresenceAware, requestParameters.presenceSub, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RtmApi - factory interface
 * @export
 */
export const RtmApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RtmApiFp(configuration)
    return {
        /**
         * Starts a Real Time Messaging session.
         * @param {RtmApiConnectRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        connect(requestParameters: RtmApiConnectRequest, options?: AxiosRequestConfig): AxiosPromise<RtmConnectResponse> {
            return localVarFp.connect(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for connect operation in RtmApi.
 * @export
 * @interface RtmApiConnectRequest
 */
export type RtmApiConnectRequest = {
    
    /**
    * Authentication token. Requires scope: `rtm:stream`
    * @type {string}
    * @memberof RtmApiConnect
    */
    readonly token: string
    
    /**
    * Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](https://slack.dev).
    * @type {boolean}
    * @memberof RtmApiConnect
    */
    readonly batchPresenceAware?: boolean
    
    /**
    * Only deliver presence events when requested by subscription. See [presence subscriptions](https://slack.dev).
    * @type {boolean}
    * @memberof RtmApiConnect
    */
    readonly presenceSub?: boolean
    
}

/**
 * RtmApiGenerated - object-oriented interface
 * @export
 * @class RtmApiGenerated
 * @extends {BaseAPI}
 */
export class RtmApiGenerated extends BaseAPI {
    /**
     * Starts a Real Time Messaging session.
     * @param {RtmApiConnectRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RtmApiGenerated
     */
    public connect(requestParameters: RtmApiConnectRequest, options?: AxiosRequestConfig) {
        return RtmApiFp(this.configuration).connect(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
