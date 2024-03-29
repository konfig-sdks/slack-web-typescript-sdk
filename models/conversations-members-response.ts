/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AdminconversationsGetTeamsListResponseResponseMetadata } from './adminconversations-get-teams-list-response-response-metadata';
import { DefsOkTrue } from './defs-ok-true';

/**
 * Schema for successful response conversations.members method
 * @export
 * @interface ConversationsMembersResponse
 */
export interface ConversationsMembersResponse {
    /**
     * 
     * @type {Set<string>}
     * @memberof ConversationsMembersResponse
     */
    'members': Set<string>;
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof ConversationsMembersResponse
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {AdminconversationsGetTeamsListResponseResponseMetadata}
     * @memberof ConversationsMembersResponse
     */
    'response_metadata': AdminconversationsGetTeamsListResponseResponseMetadata;
}

