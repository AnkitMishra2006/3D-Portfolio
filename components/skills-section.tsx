"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { skills } from "@/constants/data"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{
                      borderColor: skill.color,
                      backgroundColor: `${skill.color}20`,
                      color: skill.color,
                    }}
                  >
                    <span className="font-medium">{skill.name}</span>
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
