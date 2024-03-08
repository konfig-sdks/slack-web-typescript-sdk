/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DefsOkTrue } from './defs-ok-true';
import { ObjsComment } from './objs-comment';
import { ObjsFile } from './objs-file';
import { ObjsMessage } from './objs-message';
import { ReactionsGetResponseInnerAnyOf } from './reactions-get-response-inner-any-of';
import { ReactionsGetResponseInnerAnyOf1 } from './reactions-get-response-inner-any-of1';
import { ReactionsGetResponseInnerAnyOf2 } from './reactions-get-response-inner-any-of2';

/**
 * @type ReactionsGetResponseInner
 * @export
 */
export type ReactionsGetResponseInner = ReactionsGetResponseInnerAnyOf | ReactionsGetResponseInnerAnyOf1 | ReactionsGetResponseInnerAnyOf2;


