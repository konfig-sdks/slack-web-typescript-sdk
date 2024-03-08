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
 * @interface ChatUpdateRequest
 */
export interface ChatUpdateRequest {
    /**
     * Pass true to update the message as the authed user. [Bot users](https://slack.dev) in this context are considered authed users.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'as_user'?: string;
    /**
     * A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don\'t include this field, the message\'s previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'attachments'?: string;
    /**
     * A JSON-based array of [structured blocks](https://slack.dev), presented as a URL-encoded string. If you don\'t include this field, the message\'s previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'blocks'?: string;
    /**
     * Channel containing the message to be updated.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'channel': string;
    /**
     * Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'link_names'?: string;
    /**
     * Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'parse'?: string;
    /**
     * New text for the message, using the [default formatting rules](https://slack.dev). It\'s not required when presenting `blocks` or `attachments`.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'text'?: string;
    /**
     * Timestamp of the message to be updated.
     * @type {string}
     * @memberof ChatUpdateRequest
     */
    'ts': string;
}

