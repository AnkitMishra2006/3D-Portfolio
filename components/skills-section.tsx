"use client"

import { useRef } from "react"
import { skills } from "@/constants/data"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SKILLS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      borderColor: skill.color,
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring DevOps and mobile app
            development to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  )
}
