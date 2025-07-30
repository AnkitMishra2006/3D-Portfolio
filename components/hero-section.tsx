"use client"

import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import gsap from "gsap"
import { personalInfo } from "@/constants/data"
import InteractiveAvatar from "./interactive-avatar"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // Animate name with letter-by-letter effect
    const nameChars = titleRef.current?.querySelectorAll(".char")
    if (nameChars) {
      gsap.set(nameChars, { opacity: 0, y: 100, rotationX: -90 })
      tl.to(nameChars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
      })
    }

    tl.from(
      subtitleRef.current,
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.4",
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
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4",
      )

    // Floating animation for title
    gsap.to(titleRef.current, {
      y: -5,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })

    // Glitch effect on hover
    const handleMouseEnter = () => {
      gsap.to(titleRef.current, {
        textShadow: "2px 2px #ff00ff, -2px -2px #00ffff, 1px -1px #ffff00",
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

  const splitTextIntoChars = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block" style={{ transformOrigin: "50% 100%" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open(personalInfo.resume, "_blank")
  }

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl w-full">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer leading-tight"
          >
            {splitTextIntoChars(personalInfo.name)}
          </h1>

          <p ref={subtitleRef} className="text-xl sm:text-2xl md:text-3xl text-cyan-400 mb-4 font-light tracking-wider">
            {personalInfo.title}
          </p>

          <p
            ref={descriptionRef}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            {personalInfo.shortDescription}
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={openResume}
              className="px-6 sm:px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-medium rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              View Resume
            </button>
          </div>
        </div>

        {/* Right side - 3D Avatar */}
        <div className="h-64 sm:h-80 lg:h-96 xl:h-[500px] relative order-1 lg:order-2">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <InteractiveAvatar />
            </Suspense>
          </Canvas>
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-xs sm:text-sm text-gray-400 mb-2">Click and drag to interact</p>
            <div className="flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
