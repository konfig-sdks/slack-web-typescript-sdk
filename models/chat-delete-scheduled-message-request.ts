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
 * @interface ChatDeleteScheduledMessageRequest
 */
export interface ChatDeleteScheduledMessageRequest {
    /**
     * Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](https://slack.dev) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope.
     * @type {boolean}
     * @memberof ChatDeleteScheduledMessageRequest
     */
    'as_user'?: boolean;
    /**
     * The channel the scheduled_message is posting to
     * @type {string}
     * @memberof ChatDeleteScheduledMessageRequest
     */
    'channel': string;
    /**
     * `scheduled_message_id` returned from call to chat.scheduleMessage
     * @type {string}
     * @memberof ChatDeleteScheduledMessageRequest
     */
    'scheduled_message_id': string;
}

