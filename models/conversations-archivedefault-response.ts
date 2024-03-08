/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from conversations.archive method
 * @export
 * @interface ConversationsArchivedefaultResponse
 */
export interface ConversationsArchivedefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ConversationsArchivedefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationsArchivedefaultResponse
     */
    'error': ConversationsArchivedefaultResponseErrorEnum;
    /**
     * 
     * @type {string}
     * @memberof ConversationsArchivedefaultResponse
     */
    'needed'?: string;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ConversationsArchivedefaultResponse
     */
    'ok': DefsOkFalse;
    /**
     * 
     * @type {string}
     * @memberof ConversationsArchivedefaultResponse
     */
    'provided'?: string;
}

type ConversationsArchivedefaultResponseErrorEnum = 'method_not_supported_for_channel_type' | 'missing_scope' | 'not_supported' | 'channel_not_found' | 'already_archived' | 'cant_archive_general' | 'restricted_action' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'user_is_bot' | 'user_is_restricted' | 'user_is_ultra_restricted' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required' | 'team_added_to_org' | 'missing_charset' | 'superfluous_charset'

