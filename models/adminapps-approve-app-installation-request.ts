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
 * @interface AdminappsApproveAppInstallationRequest
 */
export interface AdminappsApproveAppInstallationRequest {
    /**
     * The id of the app to approve.
     * @type {string}
     * @memberof AdminappsApproveAppInstallationRequest
     */
    'app_id'?: string;
    /**
     * The id of the request to approve.
     * @type {string}
     * @memberof AdminappsApproveAppInstallationRequest
     */
    'request_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdminappsApproveAppInstallationRequest
     */
    'team_id'?: string;
}

