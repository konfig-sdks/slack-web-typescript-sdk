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
 * @interface AdminemojiAddEmojiRequest
 */
export interface AdminemojiAddEmojiRequest {
    /**
     * The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included.
     * @type {string}
     * @memberof AdminemojiAddEmojiRequest
     */
    'name': string;
    /**
     * Authentication token. Requires scope: `admin.teams:write`
     * @type {string}
     * @memberof AdminemojiAddEmojiRequest
     */
    'token': string;
    /**
     * The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best.
     * @type {string}
     * @memberof AdminemojiAddEmojiRequest
     */
    'url': string;
}

