import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { api } from "@/api";
import { cn } from "@/utils";

export default function ChannelsList() {
  const { guildId = "" } = useParams();

  const guildQuery = useQuery("guilds", api.guilds.list);
  const guilds = guildQuery.data?.data ?? [];
  const guild = guilds.find(guild => guild.id === guildId);

  const channelGroupQuery = useQuery("channelGroups", () =>
    api.channelGroups.list(guildId),
  );
  const channelGroups = channelGroupQuery.data?.data ?? [];

  const channelQuery = useQuery("channels", () => api.channels.list(guildId));
  const channels = channelQuery.data?.data ?? [];

  if (!guild) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="py-2 text-lg">
        <b>{guild.name}</b>
      </h1>

      {channelGroups.map(group => (
        <Disclosure key={group.id} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full gap-1 text-sm uppercase">
                <ChevronRightIcon
                  className={cn("w-5 transition-transform", {
                    "rotate-90": open,
                  })}
                />
                <span>{group.name}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="flex flex-col gap-1">
                {channels.map(channel => (
                  <Link
                    to={`${channel.id}`}
                    key={channel.id}
                    className={cn(
                      "rounded px-4 py-1 transition-colors hover:bg-white/20 active:bg-white/40",
                    )}
                  >
                    <span className="text-gray-400">#</span> {channel.name}
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
