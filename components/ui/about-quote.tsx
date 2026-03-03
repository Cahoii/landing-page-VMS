"use client"

import DotPattern from "@/components/ui/dot-pattern"
import { MemberCard } from "@/components/ui/member-card"
import { teamMembers } from "@/components/ui/team-members"

type Member = {
  name: string
  role: string
  imageSrc: string
  group: "Dev Team" | "Leader" | "Media Team"
  socialLinks: { facebook?: string; github?: string; gmail?: string }
}

// Map teamMembers to the required bento grid order
const allMembers: Member[] = [
  // Dev Team - indices 1, 2, 6 (Tu, Anh, Hoang)
  { ...teamMembers[1], group: "Dev Team" },
  { ...teamMembers[2], group: "Dev Team" },
  { ...teamMembers[3], group: "Dev Team" },
  // Leader - index 0 (Nam)
  { ...teamMembers[0], group: "Leader" },
  // Media Team - indices 3, 4, 5 (Ha, Khanh, Son)
  { ...teamMembers[4], group: "Media Team" },
  { ...teamMembers[5], group: "Media Team" },
  { ...teamMembers[6], group: "Media Team" },
] as Member[]

const GROUP_COLORS: Record<Member["group"], string> = {
  "Dev Team": "text-white/70 border-white/20",
  "Leader": "text-white/70 border-white/20",
  "Media Team": "text-white/70 border-white/20",
}

function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm ${className}`}>
      <DotPattern width={5} height={5} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export function AboutQuote() {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="grid gap-2">

        {/* ── TOP: Team intro banner ── */}
        <BentoCard className="p-8 md:p-12">
          <div className="max-w-5xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-6 md:mb-8 font-open-sans-custom">
              Beyond2D Team
            </h1>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
              </p>
              <p className="text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-open-sans-custom leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* ── BOTTOM: Single block with 7-column accordion ── */}
        <BentoCard className="p-4">
          {/* Group labels row */}
          <div className="flex mb-3 px-1">
            {/* Dev Team label spans 3 slots */}
            <div className="flex-[3] flex justify-center">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full px-3 py-0.5 ${GROUP_COLORS["Dev Team"]}`}>
                Dev Team
              </span>
            </div>
            {/* Leader label spans 1 slot */}
            <div className="flex-[1] flex justify-center">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full px-3 py-0.5 ${GROUP_COLORS["Leader"]}`}>
                Leader
              </span>
            </div>
            {/* Media Team label spans 3 slots */}
            <div className="flex-[3] flex justify-center">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full px-3 py-0.5 ${GROUP_COLORS["Media Team"]}`}>
                Media Team
              </span>
            </div>
          </div>

          {/* Accordion row — 7 cards */}
          <div className="flex gap-2 h-[340px]">
            {allMembers.map((member, i) => (
              <div key={i} className="accordion-card-slot">
                <MemberCard
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                  socialLinks={member.socialLinks}
                />
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
    </div>
  )
}
