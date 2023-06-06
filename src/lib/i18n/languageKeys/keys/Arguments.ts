import { FT, T } from '#lib/types';

export const BooleanDisabled = T('arguments:booleanDisabled');
export const BooleanError = FT<{ parameter: string; possibles: string[]; count: number }>('arguments:booleanError');
export const BooleanEnabled = T('arguments:booleanEnabled');
export const BooleanFalseOptions = T<readonly string[]>('arguments:booleanFalseOptions');
export const BooleanTrueOptions = T<readonly string[]>('arguments:booleanTrueOptions');
export const CaseLatestOptions = T<readonly string[]>('arguments:caseLatestOptions');
export const CategoryChannelError = FT<{ parameter: string }>('arguments:categoryChannelError');
export const ChannelError = FT<{ parameter: string }>('arguments:channelError');
export const Command = FT<{ parameter: string }>('arguments:command');
export const CommandMatch = FT<{ parameter: string }>('arguments:commandMatch');
export const DateError = FT<{ parameter: string }>('arguments:dateError');
export const DateTooFar = FT<{ parameter: string; maximum: number }>('arguments:dateTooFar');
export const DateTooEarly = FT<{ parameter: string; minimum: number }>('arguments:dateTooEarly');
export const DmChannelError = FT<{ parameter: string }>('arguments:dmChannelError');
export const Duration = FT<{ parameter: string }>('arguments:duration');
export const Emoji = FT<{ parameter: string }>('arguments:emoji');
export const FloatError = FT<{ parameter: string }>('arguments:floatError');
export const FloatTooLarge = FT<{ parameter: string; maximum: number }>('arguments:floatTooLarge');
export const FloatTooSmall = FT<{ parameter: string; minimum: number }>('arguments:floatTooSmall');
export const GuildChannelError = FT<{ parameter: string }>('arguments:guildChannelError');
export const GuildChannelMissingGuildError = FT<{ parameter: string }>('arguments:guildChannelMissingGuildError');
export const GuildPrivateThreadChannelError = FT<{ parameter: string }>('arguments:guildPrivateThreadChannelError');
export const GuildPublicThreadChannelError = FT<{ parameter: string }>('arguments:guildPublicThreadChannelError');
export const GuildStageVoiceChannelError = FT<{ parameter: string }>('arguments:guildStageVoiceChannelError');
export const GuildTextChannelError = FT<{ parameter: string }>('arguments:guildTextChannelError');
export const GuildThreadChannelError = T('arguments:guildThreadChannelError');
export const GuildVoiceChannelError = FT<{ parameter: string }>('arguments:guildVoiceChannelError');
export const NewsChannel = FT<{ parameter: string }>('arguments:newsChannel');
export const HyperlinkError = FT<{ parameter: string }>('arguments:hyperlinkError');
export const IntegerError = FT<{ parameter: string }>('arguments:integerError');
export const IntegerTooLarge = FT<{ parameter: string; maximum: number }>('arguments:integerTooLarge');
export const IntegerTooSmall = FT<{ parameter: string; minimum: number }>('arguments:integerTooSmall');
export const Invite = FT<{ parameter: string }>('arguments:invite');
export const Language = FT<{ parameter: string; possibles: readonly string[] }>('arguments:language');
export const MemberError = FT<{ parameter: string }>('arguments:memberError');
export const MemberMissingGuild = FT<{ parameter: string }>('arguments:memberMissingGuild');
export const MessageError = FT<{ parameter: string }>('arguments:messageError');
export const Missing = T('arguments:missing');
export const NumberError = FT<{ parameter: string }>('arguments:numberError');
export const NumberTooLarge = FT<{ parameter: string; maximum: number }>('arguments:numberTooLarge');
export const NumberTooSmall = FT<{ parameter: string; minimum: number }>('arguments:numberTooSmall');
export const Piece = FT<{ parameter: string; piece: string }>('arguments:piece');
export const RangeInvalid = FT<{ value: string }>('arguments:rangeInvalid');
export const RangeMax = FT<{ value: string; maximum: number; count: number }>('arguments:rangeMax');
export const ResetPossibles = T<string[]>('arguments:resetPossibles');
export const RoleError = FT<{ parameter: string }>('arguments:roleError');
export const RoleMissingGuild = FT<{ parameter: string }>('arguments:roleMissingGuild');
export const ScopeGlobal = T('arguments:scopeGlobal');
export const ScopeLocal = T('arguments:scopeLocal');
export const Snowflake = FT<{ parameter: string }>('arguments:snowflake');
export const Store = FT<{ parameter: string }>('arguments:store');
export const StringTooLong = FT<{ parameter: string; maximum: number }>('arguments:stringTooLong');
export const StringTooShort = FT<{ parameter: string; minimum: number }>('arguments:stringTooShort');
export const Time = FT<{ parameter: string }>('arguments:time');
export const TimeSpan = FT<{ parameter: string }>('arguments:timeSpan');
export const TimeSpanTooBig = FT<{ parameter: string }>('arguments:timeSpanTooBig');
export const TimeSpanTooSmall = FT<{ parameter: string }>('arguments:timeSpanTooSmall');
export const TooFewWinners = FT<{ parameter: string }>('arguments:tooFewWinners');
export const TooManyWinners = FT<{ parameter: string }>('arguments:tooManyWinners');
export const Unavailable = T('arguments:unavailable');
export const UserError = FT<{ parameter: string }>('arguments:userError');
