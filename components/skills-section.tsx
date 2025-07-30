"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const skills = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "Three.js", level: 75, color: "#000000" },
  { name: "Python", level: 88, color: "#3776AB" },
  { name: "Java", level: 82, color: "#ED8B00" },
  { name: "JavaScript", level: 90, color: "#F7DF1E" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "MongoDB", level: 78, color: "#47A248" },
  { name: "MySQL", level: 85, color: "#4479A1" },
  { name: "FastAPI", level: 75, color: "#009688" },
  { name: "Flask", level: 80, color: "#000000" },
  { name: "GSAP", level: 70, color: "#88CE02" },
]

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

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SKILLS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
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

        <div className="mt-16 text-center fade-in">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously learning and adapting to new technologies. Currently exploring DevOps and mobile app
            development to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  )
}
