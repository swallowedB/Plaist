import { ReactNode } from "react";

interface GlassProps {
  children: ReactNode;
}

export default function Glass({ children }: GlassProps) {
  return (
    <div
      id="input-container--glass"
      className="relative flex items-center justify-center h-screen w-[90%] max-w-[501px] max-h-[675px] bg-transparent rounded-2xl border border-white backdrop-blur-xl shadow-lg z-10"
    >
      {children}
    </div>
  );
}
