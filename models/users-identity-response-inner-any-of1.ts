/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { UsersIdentityResponseInnerAnyOf1User } from './users-identity-response-inner-any-of1-user';
import { UsersIdentityResponseInnerAnyOfTeam } from './users-identity-response-inner-any-of-team';

/**
 * Schema for \'identity.basic,identity.email\' scopes
 * @export
 * @interface UsersIdentityResponseInnerAnyOf1
 */
export interface UsersIdentityResponseInnerAnyOf1 {
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof UsersIdentityResponseInnerAnyOf1
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {UsersIdentityResponseInnerAnyOfTeam}
     * @memberof UsersIdentityResponseInnerAnyOf1
     */
    'team': UsersIdentityResponseInnerAnyOfTeam;
    /**
     * 
     * @type {UsersIdentityResponseInnerAnyOf1User}
     * @memberof UsersIdentityResponseInnerAnyOf1
     */
    'user': UsersIdentityResponseInnerAnyOf1User;
}
