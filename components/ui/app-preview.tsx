"use client"

import Image from "next/image"

export function AppPreview() {
    return (
        <div className="relative mx-auto mt-10 w-full max-w-6xl rounded-2xl border-2 border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl md:p-4">
            {/* App Window Frame */}
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner">
                {/* Title Bar */}
                <div className="flex h-10 w-full items-center justify-between border-b border-white/10 bg-white/5 px-4 backdrop-blur-md">
                    {/* Windows-like controls (or abstract dots) */}
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                    {/* App Title */}
                    <div className="text-xs font-semibold tracking-wider text-white/50 font-open-sans-custom">
                        Visual Math Studio
                    </div>
                    {/* Empty space to balance flex */}
                    <div className="w-14" />
                </div>

                {/* App Content Placeholder */}
                <div className="relative aspect-video w-full bg-[#0a0a0a]">
                    {/* This is where a real screenshot or video wrapper would go. Using a stylized placeholder. */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />

                    {/* Placeholder Grid / Graph Interface */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    <div className="flex h-full w-full items-center justify-center p-8">
                        <div className="text-center">
                            <svg
                                className="mx-auto mb-4 h-16 w-16 text-white/20"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                <polyline points="14 2 14 8 20 8" />
                                <path d="m9 15 2 2 4-4" />
                            </svg>
                            <h3 className="text-2xl font-bold text-white/40 font-open-sans-custom">App Interface Placeholder</h3>
                            <p className="mt-2 text-white/30 font-open-sans-custom">You can place a real screenshot image here.</p>
                        </div>
                        {/* If the user has an image later:
              <Image 
                src="/app-screenshot.png" 
                alt="App Interface" 
                fill 
                className="object-cover" 
              />
            */}
                    </div>
                </div>
            </div>
        </div>
    )
}
