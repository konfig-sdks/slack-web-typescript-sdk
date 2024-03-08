/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConversationsRepliesResponseMessagesInnerInner } from './conversations-replies-response-messages-inner-inner';
import { DefsOkTrue } from './defs-ok-true';

/**
 * Schema for successful response from conversations.replies method
 * @export
 * @interface ConversationsRepliesResponse
 */
export interface ConversationsRepliesResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ConversationsRepliesResponse
     */
    'has_more'?: boolean;
    /**
     * 
     * @type {Array<Array<ConversationsRepliesResponseMessagesInnerInner>>}
     * @memberof ConversationsRepliesResponse
     */
    'messages': Array<Array<ConversationsRepliesResponseMessagesInnerInner>>;
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof ConversationsRepliesResponse
     */
    'ok': DefsOkTrue;
}

