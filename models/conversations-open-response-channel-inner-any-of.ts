/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ObjsMessage } from './objs-message';

/**
 * 
 * @export
 * @interface ConversationsOpenResponseChannelInnerAnyOf
 */
export interface ConversationsOpenResponseChannelInnerAnyOf {
    /**
     * 
     * @type {string}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'is_im'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'is_open'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'last_read'?: string;
    /**
     * 
     * @type {ObjsMessage}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'latest'?: ObjsMessage;
    /**
     * 
     * @type {number}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'unread_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'unread_count_display'?: number;
    /**
     * 
     * @type {string}
     * @memberof ConversationsOpenResponseChannelInnerAnyOf
     */
    'user'?: string;
}

