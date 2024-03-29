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
 * @interface AdminteamssettingsSetIconRequest
 */
export interface AdminteamssettingsSetIconRequest {
    /**
     * Image URL for the icon
     * @type {string}
     * @memberof AdminteamssettingsSetIconRequest
     */
    'image_url': string;
    /**
     * ID for the workspace to set the icon for.
     * @type {string}
     * @memberof AdminteamssettingsSetIconRequest
     */
    'team_id': string;
    /**
     * Authentication token. Requires scope: `admin.teams:write`
     * @type {string}
     * @memberof AdminteamssettingsSetIconRequest
     */
    'token': string;
}

