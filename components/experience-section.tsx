"use client"

import { experiences } from "@/constants/data"

export default function ExperienceSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-green-400 to-blue-500"
      case "organization":
        return "from-purple-400 to-pink-500"
      case "education":
        return "from-cyan-400 to-blue-500"
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

  return (
    <section className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            EDUCATION & EXPERIENCE 
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col md:flex-row items-center mb-12 sm:mb-16 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              <div
                className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-6 lg:pr-8 md:text-right" : "md:pl-6 lg:pl-8"} mb-6 md:mb-0`}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 sm:p-6 hover:border-gray-500 transition-all duration-300 hover:bg-gray-800/70">
                  <div
                    className={`flex items-center justify-between mb-3 ${index % 2 === 0 ? "md:flex-row-reverse md:space-x-reverse" : ""}`}
                  >
                    <div
                      className={`flex items-center space-x-2 ${index % 2 === 0 ? "md:flex-row-reverse md:space-x-reverse" : ""}`}
                    >
                      <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-20 rounded-full text-xs font-medium`}
                      >
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">{exp.description}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-white/20 rounded-full text-xs text-gray-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`w-6 h-6 bg-gradient-to-r ${getTypeColor(exp.type)} rounded-full border-4 border-black flex items-center justify-center flex-shrink-0 hidden md:flex`}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Mobile spacer */}
              <div className="w-full md:w-1/2 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
