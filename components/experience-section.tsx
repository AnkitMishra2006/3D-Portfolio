"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { experiences, colorTheme } from "@/constants/data"

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(".timeline-item")

    timelineItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1.2,
        delay: index * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Animate timeline line
    gsap.fromTo(
      ".timeline-line",
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    )
  }, [])

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return colorTheme.gradients.success
      case "organization":
        return colorTheme.gradients.secondary
      case "education":
        return colorTheme.gradients.info
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return "💼"
      case "organization":
        return "🏢"
      case "education":
        return "🎓"
      default:
        return "📋"
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "work":
        return "Work Experience"
      case "organization":
        return "Organization"
      case "education":
        return "Education"
      default:
        return "Other"
    }
  }

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            <span className={`bg-gradient-to-r ${colorTheme.gradients.success} bg-clip-text text-transparent`}>
              EXPERIENCE & EDUCATION
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            My journey through professional experiences, academic achievements, and community involvement that shaped my
            development as a full-stack developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`timeline-item flex items-center mb-16 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center space-x-3 ${
                        index % 2 === 0 ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <span className="text-3xl">{getTypeIcon(exp.type)}</span>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-20 rounded-full text-xs font-medium text-white border border-white/20`}
                      >
                        {getTypeBadge(exp.type)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p
                    className={`text-lg font-medium mb-2 bg-gradient-to-r ${getTypeColor(exp.type)} bg-clip-text text-transparent`}
                  >
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 font-medium">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-10 border border-opacity-30 rounded-full text-xs text-gray-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3 text-sm text-gray-300">
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full mt-1.5 flex-shrink-0`}
                          ></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full border-4 border-black flex items-center justify-center shadow-lg`}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 fade-in">
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">8.265</div>
            <div className="text-gray-300">Current CGPA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-300">Students Mentored</div>
          </div>
        </div>
      </div>
    </section>
  )
}
