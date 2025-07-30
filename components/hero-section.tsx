"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.from(titleRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8",
      )
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6",
      )

    // Floating animation for title
    gsap.to(titleRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Glitch effect on hover
    const handleMouseEnter = () => {
      gsap.to(titleRef.current, {
        textShadow: "2px 2px #ff00ff, -2px -2px #00ffff",
        duration: 0.1,
        yoyo: true,
        repeat: 3,
      })
    }

    titleRef.current?.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      titleRef.current?.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        >
          ANKIT KUMAR MISHRA
        </h1>

        <p ref={subtitleRef} className="text-2xl md:text-3xl text-cyan-400 mb-8 font-light tracking-wider">
          Full Stack Developer
        </p>

        <p ref={descriptionRef} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Motivated Full Stack Developer with experience in React, Next.js, Flask, FastAPI, and programming languages
          like Python, C, C++, and Java. Proficient in MySQL and MongoDB, with a strong foundation in OOPS, DBMS, and
          Data Structures.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400">
            📍 Delhi, India
          </span>
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400">
            🎓 B.Tech CSE
          </span>
          <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400">
            💼 Open to Work
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
