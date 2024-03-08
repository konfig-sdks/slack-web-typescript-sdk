/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AdminconversationsGetTeamsListResponseResponseMetadata } from './adminconversations-get-teams-list-response-response-metadata';
import { ChatscheduledMessagesListResponseScheduledMessagesInner } from './chatscheduled-messages-list-response-scheduled-messages-inner';
import { DefsOkTrue } from './defs-ok-true';

/**
 * Schema for successful response from chat.scheduledMessages.list method
 * @export
 * @interface ChatscheduledMessagesListResponse
 */
export interface ChatscheduledMessagesListResponse {
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof ChatscheduledMessagesListResponse
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {AdminconversationsGetTeamsListResponseResponseMetadata}
     * @memberof ChatscheduledMessagesListResponse
     */
    'response_metadata': AdminconversationsGetTeamsListResponseResponseMetadata;
    /**
     * 
     * @type {Array<ChatscheduledMessagesListResponseScheduledMessagesInner>}
     * @memberof ChatscheduledMessagesListResponse
     */
    'scheduled_messages': Array<ChatscheduledMessagesListResponseScheduledMessagesInner>;
}
