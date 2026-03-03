"use client"

import Image from "next/image"
import { useState, useCallback, useEffect, useRef } from "react"
import { PREVIEW_IMAGES } from "@/components/ui/preview-images"

export function AppPreview() {
    const images = PREVIEW_IMAGES
    const [current, setCurrent] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning || images.length === 0) return
            setIsTransitioning(true)
            setCurrent(index)
            setTimeout(() => setIsTransitioning(false), 500)
        },
        [isTransitioning, images.length]
    )

    const next = useCallback(() => {
        goTo((current + 1) % images.length)
    }, [current, images.length, goTo])

    const prev = useCallback(() => {
        goTo((current - 1 + images.length) % images.length)
    }, [current, images.length, goTo])

    // Auto-play every 5s
    useEffect(() => {
        if (images.length <= 1) return
        autoPlayRef.current = setInterval(next, 5000)
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        }
    }, [next, images.length])

    const resetAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current)
        if (images.length > 1) {
            autoPlayRef.current = setInterval(next, 5000)
        }
    }, [next, images.length])

    return (
        <div className="relative mx-auto mt-10 w-full max-w-6xl rounded-2xl border-2 border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl md:p-4">
            {/* App Window Frame */}
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner">
                {/* Carousel Content */}
                <div className="relative aspect-video w-full bg-[#0a0a0a] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none z-10" />
                    {images.length === 0 ? (
                        <div className="flex h-full w-full items-center justify-center p-8">
                            <div className="text-center">
                                <svg
                                    className="mx-auto mb-4 h-16 w-16 text-white/20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                    <circle cx="9" cy="9" r="2" />
                                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                </svg>
                                <h3 className="text-xl font-bold text-white/40 font-open-sans-custom">No Preview Images</h3>
                                <p className="mt-2 text-sm text-white/30 font-open-sans-custom">
                                    Add <code className="text-white/50">.webp</code> images to <code className="text-white/50">public/preview/</code>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {images.map((src, i) => (
                                <div
                                    key={src}
                                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                                    style={{
                                        opacity: i === current ? 1 : 0,
                                        transform: i === current ? "scale(1)" : "scale(1.04)",
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`App preview ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </div>
                            ))}

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => { prev(); resetAutoPlay() }}
                                        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md transition-all hover:bg-black/60 hover:text-white hover:scale-110"
                                        aria-label="Previous"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => { next(); resetAutoPlay() }}
                                        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md transition-all hover:bg-black/60 hover:text-white hover:scale-110"
                                        aria-label="Next"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </>
                    )}

                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-md border border-white/10">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { goTo(i); resetAutoPlay() }}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                                        ? "w-6 bg-white/90"
                                        : "w-1.5 bg-white/30 hover:bg-white/60"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
