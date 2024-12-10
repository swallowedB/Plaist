import { ReactNode } from "react";

interface GlassProps {
  children: ReactNode;
}

export default function Glass({ children }: GlassProps) {
  return (
    <div
      id="input-container--glass"
      className="relative flex flex-col items-center justify-center w-[90%] max-w-[501px] bg-transparent rounded-2xl border border-white backdrop-blur-xl shadow-lg z-10 p-6"
    >
      {children}
    </div>
  );
}
