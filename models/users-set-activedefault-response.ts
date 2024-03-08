/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkFalse } from './defs-ok-false';

/**
 * Schema for error response from users.setActive method
 * @export
 * @interface UsersSetActivedefaultResponse
 */
export interface UsersSetActivedefaultResponse {
    /**
     * Note: PHP callstack is only visible in dev/qa
     * @type {string}
     * @memberof UsersSetActivedefaultResponse
     */
    'callstack'?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersSetActivedefaultResponse
     */
    'error': UsersSetActivedefaultResponseErrorEnum;
    /**
     * 
     * @type {DefsOkFalse}
     * @memberof UsersSetActivedefaultResponse
     */
    'ok': DefsOkFalse;
}

type UsersSetActivedefaultResponseErrorEnum = 'not_authed' | 'invalid_auth' | 'account_inactive' | 'token_revoked' | 'no_permission' | 'org_login_required' | 'ekm_access_denied' | 'missing_scope' | 'invalid_arguments' | 'invalid_arg_name' | 'invalid_charset' | 'invalid_form_data' | 'invalid_post_type' | 'missing_post_type' | 'team_added_to_org' | 'request_timeout' | 'fatal_error' | 'internal_error'

