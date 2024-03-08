/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppspermissionsListPermissionsResponseInfoAppHome } from './appspermissions-list-permissions-response-info-app-home';
import { AppspermissionsListPermissionsResponseInfoTeam } from './appspermissions-list-permissions-response-info-team';

/**
 * 
 * @export
 * @interface AppspermissionsListPermissionsResponseInfo
 */
export interface AppspermissionsListPermissionsResponseInfo {
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoAppHome}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'app_home': AppspermissionsListPermissionsResponseInfoAppHome;
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoAppHome}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'channel': AppspermissionsListPermissionsResponseInfoAppHome;
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoAppHome}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'group': AppspermissionsListPermissionsResponseInfoAppHome;
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoAppHome}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'im': AppspermissionsListPermissionsResponseInfoAppHome;
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoAppHome}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'mpim': AppspermissionsListPermissionsResponseInfoAppHome;
    /**
     * 
     * @type {AppspermissionsListPermissionsResponseInfoTeam}
     * @memberof AppspermissionsListPermissionsResponseInfo
     */
    'team': AppspermissionsListPermissionsResponseInfoTeam;
}

