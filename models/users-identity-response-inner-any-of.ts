/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { RtmConnectResponseSelf } from './rtm-connect-response-self';
import { UsersIdentityResponseInnerAnyOfTeam } from './users-identity-response-inner-any-of-team';

/**
 * Schema for \'identity.basic\' scope
 * @export
 * @interface UsersIdentityResponseInnerAnyOf
 */
export interface UsersIdentityResponseInnerAnyOf {
    /**
     * 
     * @type {DefsOkTrue}
     * @memberof UsersIdentityResponseInnerAnyOf
     */
    'ok': DefsOkTrue;
    /**
     * 
     * @type {UsersIdentityResponseInnerAnyOfTeam}
     * @memberof UsersIdentityResponseInnerAnyOf
     */
    'team': UsersIdentityResponseInnerAnyOfTeam;
    /**
     * 
     * @type {RtmConnectResponseSelf}
     * @memberof UsersIdentityResponseInnerAnyOf
     */
    'user': RtmConnectResponseSelf;
}
