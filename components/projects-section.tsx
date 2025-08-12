"use client"

import { useState, useEffect } from "react"
import { projects } from "@/constants/data"

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [projectsToShow, setProjectsToShow] = useState(6)

  // Add this useEffect after the existing state declarations
  useEffect(() => {
    if (selectedProject) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "15px" // Prevent layout shift from scrollbar
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "0px"
    }
  }, [selectedProject])

  const displayedProjects = projects.slice(0, projectsToShow)
  const hasMoreProjects = projectsToShow < projects.length
  const showingAllProjects = projectsToShow >= projects.length && projects.length > 6

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  const handleDemoClick = (demoUrl: string) => {
    window.open(demoUrl, "_blank")
  }

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank")
  }

  const loadMoreProjects = () => {
    setProjectsToShow((prev) => prev + 6)
  }

  const showLessProjects = () => {
    setProjectsToShow(6)
    // Smooth scroll to projects section
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getProjectBorderStyle = (project: any) => {
    const gradientMap: { [key: string]: string } = {
      "from-green-400 to-green-600": "linear-gradient(135deg, #4ade80, #16a34a)",
      "from-orange-400 to-orange-600": "linear-gradient(135deg, #fb923c, #ea580c)",
      "from-indigo-400 to-indigo-600": "linear-gradient(135deg, #818cf8, #4f46e5)",
      "from-emerald-400 to-emerald-600": "linear-gradient(135deg, #34d399, #059669)",
      "from-blue-400 to-blue-600": "linear-gradient(135deg, #60a5fa, #2563eb)",
      "from-orange-400 to-red-500": "linear-gradient(135deg, #fb923c, #ef4444)",
      "from-blue-500 to-blue-700": "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      "from-cyan-400 to-blue-500": "linear-gradient(135deg, #22d3ee, #3b82f6)",
      "from-blue-500 to-indigo-600": "linear-gradient(135deg, #3b82f6, #4f46e5)",
      "from-blue-500 to-purple-600": "linear-gradient(135deg, #3b82f6, #7c3aed)",
      "from-cyan-400 to-cyan-600": "linear-gradient(135deg, #22d3ee, #0891b2)",
      "from-cyan-500 to-teal-600": "linear-gradient(135deg, #06b6d4, #0d9488)",
      "from-yellow-400 to-yellow-600": "linear-gradient(135deg, #facc15, #ca8a04)",
      "from-red-500 to-red-600": "linear-gradient(135deg, #ef4444, #dc2626)",
      "from-indigo-400 to-purple-600": "linear-gradient(135deg, #818cf8, #7c3aed)",
    }

    return {
      background: gradientMap[project.gradient] || "linear-gradient(135deg, #4ade80, #16a34a)",
      padding: "2px",
      borderRadius: "16px",
    }
  }

  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">PROJECTS</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          A showcase of my technical projects, each demonstrating different aspects of full-stack development, from web
          applications to browser extensions and interactive games.
        </p>

        {/* Projects Count Info */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-400 text-sm">
            Showing {displayedProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => openProjectModal(project.id)}
              style={getProjectBorderStyle(project)}
            >
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 h-full">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white pr-2">{project.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex-shrink-0 ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 sm:space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDemoClick(project.demoUrl)
                      }}
                      className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-xs sm:text-sm"
                    >
                      Demo
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleGithubClick(project.githubUrl)
                      }}
                      className="px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 text-xs sm:text-sm"
                    >
                      Code
                    </button>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProjects && (
          <div className="text-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600 hover:border-gray-500 text-sm sm:text-base"
            >
              Show More Projects
              <span className="ml-2 text-cyan-400">(+{Math.min(6, projects.length - projectsToShow)})</span>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-3">
              {projects.length - projectsToShow} more projects available
            </p>
          </div>
        )}

        {/* Show Less Button */}
        {showingAllProjects && (
          <div className="text-center">
            <button
              onClick={showLessProjects}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-orange-500 hover:border-red-400 text-sm sm:text-base"
            >
              Show Less Projects
              <span className="ml-2 text-orange-200">↑</span>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-3">Collapse to show only the first 6 projects</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-20"
          onClick={closeProjectModal}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white pr-4">{selectedProjectData.name}</h3>
              <button
                onClick={closeProjectModal}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {selectedProjectData.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProjectData.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs sm:text-sm text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProjectData.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button
                    onClick={() => handleDemoClick(selectedProjectData.demoUrl)}
                    className="px-4 sm:px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm sm:text-base"
                  >
                    View Live Demo
                  </button>
                  <button
                    onClick={() => handleGithubClick(selectedProjectData.githubUrl)}
                    className="px-4 sm:px-6 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
                  >
                    View Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
