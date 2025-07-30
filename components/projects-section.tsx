"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { projects } from "@/constants/data"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const allTechs = Array.from(new Set(projects.flatMap((project) => project.tech)))
  const filters = ["all", ...allTechs]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.tech.includes(filter))

  useEffect(() => {
    const projectCards = gsap.utils.toArray(".project-card")

    projectCards.forEach((card: any, index) => {
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
    })
  }, [filteredProjects])

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 fade-in">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">PROJECTS</span>
        </h2>

        <p className="text-xl text-gray-300 text-center mb-12 fade-in max-w-3xl mx-auto">
          A showcase of my technical projects, each demonstrating different aspects of full-stack development, from web
          applications to browser extensions and interactive games.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === filterOption
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {filterOption === "all" ? "All Projects" : filterOption}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-gradient-to-br ${project.gradient} p-1 rounded-2xl cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-sm">
                      Live Demo
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-sm">
                      GitHub
                    </button>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span
                      className={`text-white transition-transform duration-300 ${
                        selectedProject === project.id ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project View */}
        {selectedProject && (
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 fade-in">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null

              return (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                        View Live Demo
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                        View Source Code
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}
