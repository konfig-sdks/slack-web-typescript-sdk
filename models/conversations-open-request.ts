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
 * @interface ConversationsOpenRequest
 */
export interface ConversationsOpenRequest {
    /**
     * Resume a conversation by supplying an `im` or `mpim`\'s ID. Or provide the `users` field instead.
     * @type {string}
     * @memberof ConversationsOpenRequest
     */
    'channel'?: string;
    /**
     * Boolean, indicates you want the full IM channel definition in the response.
     * @type {boolean}
     * @memberof ConversationsOpenRequest
     */
    'return_im'?: boolean;
    /**
     * Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`.
     * @type {string}
     * @memberof ConversationsOpenRequest
     */
    'users'?: string;
}

