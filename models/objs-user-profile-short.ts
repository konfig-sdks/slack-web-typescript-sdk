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
 * @interface ObjsUserProfileShort
 */
export interface ObjsUserProfileShort {
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'avatar_hash': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'display_name': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'display_name_normalized'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'first_name': string | null;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'image_72': string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsUserProfileShort
     */
    'is_restricted': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsUserProfileShort
     */
    'is_ultra_restricted': boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'real_name': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'real_name_normalized'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsUserProfileShort
     */
    'team': string;
}

