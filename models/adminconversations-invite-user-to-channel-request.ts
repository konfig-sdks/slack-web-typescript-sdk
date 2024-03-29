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
 * @interface AdminconversationsInviteUserToChannelRequest
 */
export interface AdminconversationsInviteUserToChannelRequest {
    /**
     * The channel that the users will be invited to.
     * @type {string}
     * @memberof AdminconversationsInviteUserToChannelRequest
     */
    'channel_id': string;
    /**
     * The users to invite.
     * @type {string}
     * @memberof AdminconversationsInviteUserToChannelRequest
     */
    'user_ids': string;
}

