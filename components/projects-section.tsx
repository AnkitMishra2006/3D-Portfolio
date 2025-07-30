"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const projects = [
  {
    name: "WanderLust",
    description:
      "Travel Planning Web App with Express, user authentication, and RESTful APIs. Built responsive interface using Bootstrap for seamless cross-device experience.",
    tech: ["Express", "Bootstrap", "MongoDB", "Authentication", "RESTful APIs"],
    color: "#4CAF50",
    gradient: "from-green-400 to-green-600",
  },
  {
    name: "Article Summarizer",
    description:
      "Browser extension that summarizes articles using Gemini API. Supports brief, detailed, and bullet point summaries via popup interface.",
    tech: ["JavaScript", "Gemini API", "Browser Extension", "Chrome APIs"],
    color: "#2196F3",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    name: "Sonic Runner",
    description:
      "2D endless runner game with Kaplay library featuring core gameplay mechanics like jumping, scoring, and obstacle avoidance with engaging visuals.",
    tech: ["Kaplay", "Game Development", "2D Graphics", "JavaScript"],
    color: "#FF9800",
    gradient: "from-orange-400 to-orange-600",
  },
]

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const projectCards = gsap.utils.toArray(".project-card")

    projectCards.forEach((card: any, index) => {
      // Initial animation
      gsap.from(card, {
        opacity: 0,
        y: 100,
        rotation: index % 2 === 0 ? -5 : 5,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Hover animations
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotation: index % 2 === 0 ? -2 : 2,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">PROJECTS</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`project-card bg-gradient-to-br ${project.gradient} p-1 rounded-2xl cursor-pointer`}
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300">
                    View Project
                  </button>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
