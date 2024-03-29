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
 * @interface UsersSetPhotoRequest
 */
export interface UsersSetPhotoRequest {
    /**
     * Width/height of crop box (always square)
     * @type {string}
     * @memberof UsersSetPhotoRequest
     */
    'crop_w'?: string;
    /**
     * X coordinate of top-left corner of crop box
     * @type {string}
     * @memberof UsersSetPhotoRequest
     */
    'crop_x'?: string;
    /**
     * Y coordinate of top-left corner of crop box
     * @type {string}
     * @memberof UsersSetPhotoRequest
     */
    'crop_y'?: string;
    /**
     * File contents via `multipart/form-data`.
     * @type {string}
     * @memberof UsersSetPhotoRequest
     */
    'image'?: string;
    /**
     * Authentication token. Requires scope: `users.profile:write`
     * @type {string}
     * @memberof UsersSetPhotoRequest
     */
    'token': string;
}

