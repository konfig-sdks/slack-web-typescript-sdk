/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UsergroupsDisableRequest
 */
export interface UsergroupsDisableRequest {
    /**
     * Include the number of users in the User Group.
     * @type {boolean}
     * @memberof UsergroupsDisableRequest
     */
    'include_count'?: boolean;
    /**
     * The encoded ID of the User Group to disable.
     * @type {string}
     * @memberof UsergroupsDisableRequest
     */
    'usergroup': string;
}

