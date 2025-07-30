"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { personalInfo } from "@/constants/data"
import InteractiveAvatar from "./interactive-avatar"

export default function HeroSection() {
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
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl w-full">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Name - Responsive text sizing */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            <span className="block sm:inline">ANKIT KUMAR</span> <span className="block sm:inline">MISHRA</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 mb-3 sm:mb-4 font-light tracking-wider">
            {personalInfo.title}
          </p>

          {/* Short Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            {personalInfo.shortDescription}
          </p>

          {/* Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
            <button
              onClick={scrollToProjects}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              View My Work
            </button>
            <button
              onClick={openResume}
              className="px-6 sm:px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-medium rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg text-sm sm:text-base"
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
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
