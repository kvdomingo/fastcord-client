import { useQuery } from "react-query";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";

import { api } from "@/api";
import ChannelsList from "@/components/channels/ChannelsList.tsx";
import GuildsList from "@/components/guilds/GuildsList.tsx";
import MessagesArea from "@/components/messages/MessagesArea.tsx";
import MessagesHeader from "@/components/messages/MessagesHeader.tsx";
import { useAppSelector } from "@/hooks/store.ts";

const HEALTH_CHECK_INTERVAL_MS = 30000;

export default function App() {
  const { showMembersList } = useAppSelector(state => state.uiSettings);

  useQuery("health", api.health, {
    refetchInterval: HEALTH_CHECK_INTERVAL_MS,
  });

  return (
    <HashRouter>
      <main className="flex h-screen">
        <div className="h-full w-16 overflow-y-auto bg-slate-950 px-1">
          <GuildsList />
        </div>
        <div className="h-full w-64 overflow-y-auto bg-slate-900 p-2">
          <Routes>
            <Route index element={<>channels</>} />
            <Route path="/channels/:guildId" element={<ChannelsList />}>
              <Route path=":channelId" element={<ChannelsList />} />
            </Route>
          </Routes>
        </div>
        <div className="flex h-full flex-auto flex-col overflow-y-auto">
          <div className="h-12 bg-slate-900 p-2">
            <Routes>
              <Route index element={<>header</>} />
              <Route path="/channels/:guildId" element={<Outlet />}>
                <Route path=":channelId" element={<MessagesHeader />} />
              </Route>
            </Routes>
          </div>
          <div className="flex h-full">
            <div className="h-full w-96 flex-auto overflow-y-auto p-2">
              <Routes>
                <Route index element={<>messages</>} />
                <Route path="/channels/:guildId" element={<Outlet />}>
                  <Route path=":channelId" element={<MessagesArea />} />
                </Route>
              </Routes>
            </div>
            {showMembersList && (
              <div className="h-full w-64 overflow-y-auto bg-slate-900 p-2">
                <Routes>
                  <Route index element={<>members</>} />
                  <Route path="/channels/:guildId" element={<></>}>
                    <Route path=":channelId" element={<></>} />
                  </Route>
                </Routes>
              </div>
            )}
          </div>
        </div>
      </main>
    </HashRouter>
  );
}
