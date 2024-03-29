/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ObjsUserProfileShort } from './objs-user-profile-short';

/**
 * 
 * @export
 * @interface ConversationsRepliesResponseMessagesInnerInnerAnyOf1
 */
export interface ConversationsRepliesResponseMessagesInnerInnerAnyOf1 {
    /**
     * 
     * @type {boolean}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'is_starred'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'parent_user_id': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'source_team'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'team'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'thread_ts': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'ts': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'user': string;
    /**
     * 
     * @type {ObjsUserProfileShort}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'user_profile'?: ObjsUserProfileShort;
    /**
     * 
     * @type {string}
     * @memberof ConversationsRepliesResponseMessagesInnerInnerAnyOf1
     */
    'user_team'?: string;
}

