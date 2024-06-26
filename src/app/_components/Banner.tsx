"use client";

import { SecondaryButton } from "@/app/_components";
import { useInViewSection } from "../_hooks/useInViewSection";

export default function Banner() {
  const { ref } = useInViewSection("");

  return (
    <div
      ref={ref}
      className="bg-primary w-full py-16 px-4 flex flex-col gap-y-8 text-center items-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-3xl">
        Masz pomysł na projekt? Skontaktuj się ze mną i stwórzmy razem coś
        wyjątkowego
      </h2>
      <div className="flex flex-col gap-y-1">
        <h4 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
          <span className="text-[#B6C2FF80] font-bold text-3xl md:text-4xl lg:text-5xl px-2">
            ”
          </span>
          Początek jest najważniejszą częścią pracy
        </h4>
        <span className="text-white text-sm md:text-base text-secondary font-medium">
          Platon
        </span>
      </div>
      <a href="#contact">
        <SecondaryButton className="w-fit" type="button">
          Skontaktuj się
        </SecondaryButton>
      </a>
    </div>
  );
}
