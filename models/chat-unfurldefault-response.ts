/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from chat.unfurl method
 * @export
 * @interface ChatUnfurldefaultResponse
 */
export interface ChatUnfurldefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof ChatUnfurldefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChatUnfurldefaultResponse
     */
    'error': ChatUnfurldefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof ChatUnfurldefaultResponse
     */
    'ok': DefsOkFalse;
}

type ChatUnfurldefaultResponseErrorEnum = 'cannot_unfurl_url' | 'cannot_find_service' | 'missing_unfurls' | 'cannot_prompt' | 'not_authed' | 'invalid_auth' | 'account_inactive' | 'token_revoked' | 'no_permission' | 'org_login_required' | 'user_is_bot' | 'invalid_arg_name' | 'invalid_array_arg' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'team_added_to_org' | 'invalid_json' | 'json_not_object' | 'request_timeout' | 'upgrade_required' | 'fatal_error'


