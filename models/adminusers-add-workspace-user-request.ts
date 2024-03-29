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
 * @interface AdminusersAddWorkspaceUserRequest
 */
export interface AdminusersAddWorkspaceUserRequest {
    /**
     * Comma separated values of channel IDs to add user in the new workspace.
     * @type {string}
     * @memberof AdminusersAddWorkspaceUserRequest
     */
    'channel_ids'?: string;
    /**
     * True if user should be added to the workspace as a guest.
     * @type {boolean}
     * @memberof AdminusersAddWorkspaceUserRequest
     */
    'is_restricted'?: boolean;
    /**
     * True if user should be added to the workspace as a single-channel guest.
     * @type {boolean}
     * @memberof AdminusersAddWorkspaceUserRequest
     */
    'is_ultra_restricted'?: boolean;
    /**
     * The ID (`T1234`) of the workspace.
     * @type {string}
     * @memberof AdminusersAddWorkspaceUserRequest
     */
    'team_id': string;
    /**
     * The ID of the user to add to the workspace.
     * @type {string}
     * @memberof AdminusersAddWorkspaceUserRequest
     */
    'user_id': string;
}

