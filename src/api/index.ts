import { QueryClient } from "react-query";

import axios, { AxiosResponse } from "axios";

import { Channel, ChannelGroup, Guild } from "@/types";

const baseURL = "http://api.fastcord.localhost";

export const axi = axios.create({ baseURL });

export const api = {
  health: (): Promise<AxiosResponse<string>> => {
    return axi.get("/", { responseType: "text" });
  },
  guilds: {
    list: (): Promise<AxiosResponse<Guild[]>> => {
      return axi.get("/guild");
    },
  },
  channelGroups: {
    list: (guild_id: string): Promise<AxiosResponse<ChannelGroup[]>> => {
      return axi.get(`/guild/${guild_id}/channel-group`);
    },
  },
  channels: {
    list: (guild_id: string): Promise<AxiosResponse<Channel[]>> => {
      return axi.get(`/guild/${guild_id}/channel`);
    },
  },
};

export const queryClient = new QueryClient();
