import { useQuery } from "react-query";

import { api } from "@/api";
import GuildItem from "@/components/guilds/GuildItem.tsx";

export default function GuildsList() {
  const query = useQuery("guilds", api.guilds.list);
  const { data } = query;

  const guilds = data?.data ?? [];

  return (
    <div className="flex flex-col gap-1">
      <GuildItem link="/">me</GuildItem>
      {guilds.map(guild => (
        <GuildItem key={guild.id} link={`/channels/${guild.id}`}>
          {guild.name[0]}
        </GuildItem>
      ))}
    </div>
  );
}
