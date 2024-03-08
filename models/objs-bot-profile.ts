/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ObjsBotProfileIcons } from './objs-bot-profile-icons';

/**
 * 
 * @export
 * @interface ObjsBotProfile
 */
export interface ObjsBotProfile {
    /**
     * 
     * @type {string}
     * @memberof ObjsBotProfile
     */
    'app_id': string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsBotProfile
     */
    'deleted': boolean;
    /**
     * 
     * @type {ObjsBotProfileIcons}
     * @memberof ObjsBotProfile
     */
    'icons': ObjsBotProfileIcons;
    /**
     * 
     * @type {string}
     * @memberof ObjsBotProfile
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsBotProfile
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsBotProfile
     */
    'team_id': string;
    /**
     * 
     * @type {number}
     * @memberof ObjsBotProfile
     */
    'updated': number;
}

