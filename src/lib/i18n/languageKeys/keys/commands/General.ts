import type { LanguageHelpDisplayOptions } from '#lib/i18n/LanguageHelp';
import { FT, T } from '#lib/types';

export const GrowthDescription = T('commands/general:growthDescription');
export const GrowthExtended = T<LanguageHelpDisplayOptions>('commands/general:growthExtended');
export const GrowthOutfluxError = FT<{ diff: number; ping: number }, string>('commands/general:growthOutfluxError');
export const HelpAllFlag = FT<{ prefix: string }, string>('commands/general:helpAllFlag');
export const HelpCommandCount = FT<{ count: number }, string>('commands/general:helpCommandCount');
export const HelpData = FT<{ titleDescription: string; footerName: string }, { title: string; footer: string }>('commands/general:helpData');
export const HelpDescription = T('commands/general:helpDescription');
export const HelpDm = T('commands/general:helpDm');
export const HelpExtended = T<LanguageHelpDisplayOptions>('commands/general:helpExtended');
export const HelpNoDm = T('commands/general:helpNodm');
export const InfoBody = T('commands/general:infoBody');
export const InfoDescription = T('commands/general:infoDescription');
export const InfoExtended = T<LanguageHelpDisplayOptions>('commands/general:infoExtended');
export const InviteDescription = T('commands/general:inviteDescription');
export const InviteExtended = T<LanguageHelpDisplayOptions>('commands/general:inviteExtended');
export const InvitePermissionInviteText = T('commands/general:invitePermissionInviteText');
export const InvitePermissionsDescription = T('commands/general:invitePermissionsDescription');
export const InvitePermissionSupportServerText = T('commands/general:invitePermissionSupportServerText');
export const Ping = T('commands/general:ping');
export const PingDescription = T('commands/general:pingDescription');
export const PingExtended = T<LanguageHelpDisplayOptions>('commands/general:pingExtended');
export const PingPong = FT<{ diff: number; ping: number }, string>('commands/general:pingPong');
export const V7Description = T('commands/general:v7Description');
export const V7Extended = T<LanguageHelpDisplayOptions>('commands/general:v7Extended');
export const V7Message = FT<{ command: string }>('commands/general:v7Message');
export const V7PokemonMessage = FT<{ command: string }>('commands/general:v7PokemonMessage');
