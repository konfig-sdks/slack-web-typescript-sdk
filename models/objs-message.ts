/*
Slack Web API

One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth scopes.

The version of the OpenAPI document: 1.7.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BlocksInner } from './blocks-inner';
import { ObjsBotProfile } from './objs-bot-profile';
import { ObjsComment } from './objs-comment';
import { ObjsFile } from './objs-file';
import { ObjsMessageAttachmentsInner } from './objs-message-attachments-inner';
import { ObjsMessageBotIdInner } from './objs-message-bot-id-inner';
import { ObjsMessageIcons } from './objs-message-icons';
import { ObjsReaction } from './objs-reaction';
import { ObjsUserProfileShort } from './objs-user-profile-short';

/**
 * 
 * @export
 * @interface ObjsMessage
 */
export interface ObjsMessage {
    /**
     * 
     * @type {Set<ObjsMessageAttachmentsInner>}
     * @memberof ObjsMessage
     */
    'attachments'?: Set<ObjsMessageAttachmentsInner>;
    /**
     * This is a very loose definition, in the future, we\'ll populate this with deeper schema in this definition namespace.
     * @type {Array<BlocksInner>}
     * @memberof ObjsMessage
     */
    'blocks'?: Array<BlocksInner>;
    /**
     * 
     * @type {Array<ObjsMessageBotIdInner>}
     * @memberof ObjsMessage
     */
    'bot_id'?: Array<ObjsMessageBotIdInner>;
    /**
     * 
     * @type {ObjsBotProfile}
     * @memberof ObjsMessage
     */
    'bot_profile'?: ObjsBotProfile;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'client_msg_id'?: string;
    /**
     * 
     * @type {ObjsComment}
     * @memberof ObjsMessage
     */
    'comment'?: ObjsComment;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'display_as_bot'?: boolean;
    /**
     * 
     * @type {ObjsFile}
     * @memberof ObjsMessage
     */
    'file'?: ObjsFile;
    /**
     * 
     * @type {Set<ObjsFile>}
     * @memberof ObjsMessage
     */
    'files'?: Set<ObjsFile>;
    /**
     * 
     * @type {ObjsMessageIcons}
     * @memberof ObjsMessage
     */
    'icons'?: ObjsMessageIcons;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'inviter'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'is_delayed_message'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'is_intro'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'is_starred'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'last_read'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'latest_reply'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'old_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'parent_user_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'permalink'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ObjsMessage
     */
    'pinned_to'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'purpose'?: string;
    /**
     * 
     * @type {Array<ObjsReaction>}
     * @memberof ObjsMessage
     */
    'reactions'?: Array<ObjsReaction>;
    /**
     * 
     * @type {number}
     * @memberof ObjsMessage
     */
    'reply_count'?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof ObjsMessage
     */
    'reply_users'?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof ObjsMessage
     */
    'reply_users_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'source_team'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'subscribed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'subtype'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'team'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'thread_ts'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'topic'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'ts': string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'type': string;
    /**
     * 
     * @type {number}
     * @memberof ObjsMessage
     */
    'unread_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ObjsMessage
     */
    'upload'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'user'?: string;
    /**
     * 
     * @type {ObjsUserProfileShort}
     * @memberof ObjsMessage
     */
    'user_profile'?: ObjsUserProfileShort;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'user_team'?: string;
    /**
     * 
     * @type {string}
     * @memberof ObjsMessage
     */
    'username'?: string;
}

