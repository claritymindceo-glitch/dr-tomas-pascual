import React from "react";

interface SectionHeaderBannerProps {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
}

export default function SectionHeaderBanner({ image, tag, title, subtitle }: SectionHeaderBannerProps) {
  return (
    <div className="w-full flex flex-col">
      <section className="w-full bg-[#e8e6e1] border-b border-black/[0.06] relative overflow-hidden h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="bg-[#f0eeea] border-b border-black/[0.06] px-4 sm:px-12 md:px-20 py-6 sm:py-8">
        <div className="max-w-[1140px] mx-auto text-left space-y-2.5">
          <span className="font-mono text-[8px] sm:text-[9px] bg-[#4a8499]/10 border border-[#4a8499]/25 text-[#4a8499] tracking-[0.25em] font-normal px-2 py-0.5 uppercase rounded-sm inline-block">
            {tag}
          </span>
          <h2 className="font-sans text-xl sm:text-2xl md:text-3xl text-[#1a1a18] font-light tracking-[0.08em] uppercase leading-tight max-w-2xl">
            {title}
          </h2>
          <p className="font-sans text-[#5c5954] text-xs sm:text-sm font-light tracking-wide max-w-xl">
            {subtitle}
          </p>
        </div>
      </section>
    </div>
  );
}
