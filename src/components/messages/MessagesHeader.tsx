import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { UsersIcon } from "@heroicons/react/20/solid";

import { api } from "@/api";
import { useAppDispatch, useAppSelector } from "@/hooks/store.ts";
import {
  selectUISettings,
  setShowMembersList,
} from "@/store/uiSettingsSlice.ts";
import { cn } from "@/utils";

export default function MessagesHeader() {
  const dispatch = useAppDispatch();
  const { showMembersList } = useAppSelector(selectUISettings);

  const { guildId = "", channelId = "" } = useParams();

  const guildQuery = useQuery("guilds", api.guilds.list);
  const guilds = guildQuery.data?.data ?? [];
  const guild = guilds.find(guild => guild.id === guildId);

  const channelQuery = useQuery("channels", () => api.channels.list(guildId));
  const channels = channelQuery.data?.data ?? [];

  const channel = channels.find(channel => channel.id === channelId);

  if (!guild || !channel) return null;

  return (
    <div className="flex h-full items-center justify-between gap-1">
      <div className="flex gap-1">
        <span className="text-gray-400">#</span>
        <h2>
          <b>{channel.name}</b>
        </h2>
      </div>

      <div className="flex gap-1">
        <UsersIcon
          className={cn(
            "w-6 cursor-pointer transition-colors hover:text-gray-200",
            {
              "text-gray-300": !showMembersList,
            },
          )}
          onClick={() => dispatch(setShowMembersList(!showMembersList))}
        />
      </div>
    </div>
  );
}
