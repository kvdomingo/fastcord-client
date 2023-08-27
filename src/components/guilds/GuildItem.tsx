import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/utils";

interface GuildItemProps {
  link: string;
  children: string | ReactNode;
}

export default function GuildItem({ link, children }: GuildItemProps) {
  return (
    <Link to={link}>
      <div
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center",
          "transition-colors hover:rounded-2xl hover:bg-white/40 active:bg-white/50",
          "rounded-[50%] bg-white/30 transition-[border-radius]",
          "text-2xl uppercase tracking-wide",
        )}
      >
        {children}
      </div>
    </Link>
  );
}
