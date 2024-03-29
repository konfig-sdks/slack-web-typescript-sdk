/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DeprecationWarning } from './deprecation-warning';
import { DeprecationWarningAndPagingStyleTogether } from './deprecation-warning-and-paging-style-together';
import { NewPagingStyle } from './new-paging-style';

/**
 * @type ObjsResponseMetadataInner
 * @export
 */
export type ObjsResponseMetadataInner = NewPagingStyle | DeprecationWarning | DeprecationWarningAndPagingStyleTogether;


