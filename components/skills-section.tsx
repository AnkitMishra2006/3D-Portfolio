"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { skills } from "@/constants/data"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const skillBars = gsap.utils.toArray(".skill-bar")
    const skillItems = gsap.utils.toArray(".skill-item")

    skillItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    skillBars.forEach((bar: any, index) => {
      gsap.from(bar, {
        width: 0,
        duration: 1.5,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

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
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SKILLS</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 fade-in"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full transition-all duration-300 hover:shadow-lg"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring DevOps and mobile app
            development to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  )
}
