import { ReactNode } from "react";

export default function GradientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Top fade effect */}
      <div className="absolute -top-16 left-0 w-full h-16 bg-gradient-to-b from-black to-[#f5f9ff]" />

      {/* Background for content area — black in middle with sides fading */}
      <div className="relative w-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black sm:from-[#081123] sm:via-black sm:to-[#081123] pointer-events-none" />
        <div className="relative">{children}</div>
      </div>
    </>
  );
}
