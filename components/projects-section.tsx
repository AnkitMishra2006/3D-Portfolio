"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { projects, colorTheme } from "@/constants/data"

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("all")

  const allTechs = Array.from(new Set(projects.flatMap((project) => project.tech)))
  const filters = ["all", "Featured", ...allTechs.slice(0, 8)]

  const getFilteredProjects = () => {
    if (filter === "all") return projects
    if (filter === "Featured") return projects.filter((project) => project.featured)
    return projects.filter((project) => project.tech.includes(filter))
  }

  const filteredProjects = getFilteredProjects()

  useEffect(() => {
    const projectCards = gsap.utils.toArray(".project-card")
    const featuredCards = gsap.utils.toArray(".featured-card")

    featuredCards.forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.8,
        rotation: index % 2 === 0 ? -10 : 10,
        duration: 1.2,
        delay: index * 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    projectCards.forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.03,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)
    })
  }, [filteredProjects])

  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            <span className={`bg-gradient-to-r ${colorTheme.gradients.secondary} bg-clip-text text-transparent`}>
              FEATURED PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto fade-in mb-8">
            A showcase of my most impactful projects, demonstrating expertise in full-stack development, AI integration,
            and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`featured-card bg-gradient-to-br ${project.gradient} p-1 rounded-3xl cursor-pointer transform transition-all duration-300`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="bg-black/95 backdrop-blur-sm rounded-3xl p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                        ⭐ FEATURED
                      </span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-sm font-medium">
                        Live Demo
                      </button>
                      <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-sm font-medium">
                        GitHub
                      </button>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
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
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">All Projects</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? `bg-gradient-to-r ${colorTheme.gradients.primary} text-white`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filterOption === "all" ? "All Projects" : filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card bg-gradient-to-br ${project.gradient} p-1 rounded-xl cursor-pointer transition-all duration-300`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
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

                <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-xs">
                      Demo
                    </button>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-xs">
                      Code
                    </button>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span
                      className={`text-white transition-transform duration-300 text-sm ${
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
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 fade-in">
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)
              if (!project) return null

              return (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full">
                          ⭐ FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-opacity-30 rounded-full text-sm text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        className={`px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300`}
                      >
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
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}
                          ></div>
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
