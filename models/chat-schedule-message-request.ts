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
 * @interface ChatScheduleMessageRequest
 */
export interface ChatScheduleMessageRequest {
    /**
     * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship).
     * @type {boolean}
     * @memberof ChatScheduleMessageRequest
     */
    'as_user'?: boolean;
    /**
     * A JSON-based array of structured attachments, presented as a URL-encoded string.
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'attachments'?: string;
    /**
     * A JSON-based array of structured blocks, presented as a URL-encoded string.
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'blocks'?: string;
    /**
     * Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](https://slack.dev) for more details.
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'channel'?: string;
    /**
     * Find and link channel names and usernames.
     * @type {boolean}
     * @memberof ChatScheduleMessageRequest
     */
    'link_names'?: boolean;
    /**
     * Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting).
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'parse'?: string;
    /**
     * Unix EPOCH timestamp of time in future to send the message.
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'post_at'?: string;
    /**
     * Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.
     * @type {boolean}
     * @memberof ChatScheduleMessageRequest
     */
    'reply_broadcast'?: boolean;
    /**
     * How this field works and whether it is required depends on other fields you use in your API call. [See below](https://slack.dev) for more detail.
     * @type {string}
     * @memberof ChatScheduleMessageRequest
     */
    'text'?: string;
    /**
     * Provide another message\'s `ts` value to make this message a reply. Avoid using a reply\'s `ts` value; use its parent instead.
     * @type {number}
     * @memberof ChatScheduleMessageRequest
     */
    'thread_ts'?: number;
    /**
     * Pass true to enable unfurling of primarily text-based content.
     * @type {boolean}
     * @memberof ChatScheduleMessageRequest
     */
    'unfurl_links'?: boolean;
    /**
     * Pass false to disable unfurling of media content.
     * @type {boolean}
     * @memberof ChatScheduleMessageRequest
     */
    'unfurl_media'?: boolean;
}

