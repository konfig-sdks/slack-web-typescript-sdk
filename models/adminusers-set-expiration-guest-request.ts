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
 * @interface AdminusersSetExpirationGuestRequest
 */
export interface AdminusersSetExpirationGuestRequest {
    /**
     * Timestamp when guest account should be disabled.
     * @type {number}
     * @memberof AdminusersSetExpirationGuestRequest
     */
    'expiration_ts': number;
    /**
     * The ID (`T1234`) of the workspace.
     * @type {string}
     * @memberof AdminusersSetExpirationGuestRequest
     */
    'team_id': string;
    /**
     * The ID of the user to set an expiration for.
     * @type {string}
     * @memberof AdminusersSetExpirationGuestRequest
     */
    'user_id': string;
}

