"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { skillsByCategory, techStackMarqueeItems } from "@/features/home/data";
import { cn } from "@/utils/cn";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof skillsByCategory)[number]["title"]>(
    skillsByCategory[0].title,
  );

  const categories = skillsByCategory.map((group) => group.title);

  const filteredItems = useMemo(
    () => techStackMarqueeItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const marqueeItems = [...filteredItems, ...filteredItems];

  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Tech Stack"
        title="How I Build"
        description="A clean capability map across frontend, backend, tools, and creative workflow."
      />

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            size="sm"
            variant={activeCategory === category ? "primary" : "outline"}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4",
              activeCategory === category
                ? "border-zinc-500 bg-zinc-800 text-zinc-100"
                : "border-zinc-700 text-zinc-400 hover:text-zinc-100",
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-black to-transparent" />
        <div className="marquee-track" key={activeCategory}>
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="mx-1.5 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300"
            >
              {item.icon ? (
                <Image src={item.icon} alt={`${item.name} icon`} width={14} height={14} className="rounded-sm" />
              ) : (
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-800 text-[10px] text-zinc-300">
                  {item.name.charAt(0)}
                </span>
              )}
              <span>{item.name}</span>
              <span className="text-zinc-500">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
