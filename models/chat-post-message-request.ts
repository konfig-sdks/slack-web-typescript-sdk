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
 * @interface ChatPostMessageRequest
 */
export interface ChatPostMessageRequest {
    /**
     * Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](https://slack.dev) below.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'as_user'?: string;
    /**
     * A JSON-based array of structured attachments, presented as a URL-encoded string.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'attachments'?: string;
    /**
     * A JSON-based array of structured blocks, presented as a URL-encoded string.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'blocks'?: string;
    /**
     * Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](https://slack.dev) for more details.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'channel': string;
    /**
     * Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](https://slack.dev) below.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'icon_emoji'?: string;
    /**
     * URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'icon_url'?: string;
    /**
     * Find and link channel names and usernames.
     * @type {boolean}
     * @memberof ChatPostMessageRequest
     */
    'link_names'?: boolean;
    /**
     * Disable Slack markup parsing by setting to `false`. Enabled by default.
     * @type {boolean}
     * @memberof ChatPostMessageRequest
     */
    'mrkdwn'?: boolean;
    /**
     * Change how messages are treated. Defaults to `none`. See [below](https://slack.dev).
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'parse'?: string;
    /**
     * Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`.
     * @type {boolean}
     * @memberof ChatPostMessageRequest
     */
    'reply_broadcast'?: boolean;
    /**
     * How this field works and whether it is required depends on other fields you use in your API call. [See below](https://slack.dev) for more detail.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'text'?: string;
    /**
     * Provide another message\'s `ts` value to make this message a reply. Avoid using a reply\'s `ts` value; use its parent instead.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'thread_ts'?: string;
    /**
     * Pass true to enable unfurling of primarily text-based content.
     * @type {boolean}
     * @memberof ChatPostMessageRequest
     */
    'unfurl_links'?: boolean;
    /**
     * Pass false to disable unfurling of media content.
     * @type {boolean}
     * @memberof ChatPostMessageRequest
     */
    'unfurl_media'?: boolean;
    /**
     * Set your bot\'s user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](https://slack.dev) below.
     * @type {string}
     * @memberof ChatPostMessageRequest
     */
    'username'?: string;
}

