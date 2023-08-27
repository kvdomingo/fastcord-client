export interface Guild {
  id: string;
  created: string;
  name: string;
  avatar: string | null;
  banner: string | null;
}

export interface ChannelGroup {
  id: string;
  created: string;
  name: string;
  order: number;
  guild_id: string;
}

export enum ChannelType {
  TEXT = "TEXT",
  VOICE = "VOICE",
}

export interface Channel {
  id: string;
  created: string;
  name: string;
  order: number;
  type: ChannelType;
  guild_id: string;
  channel_group_id: string;
}
