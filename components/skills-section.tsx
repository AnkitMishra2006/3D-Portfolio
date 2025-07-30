"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { skills, colorTheme } from "@/constants/data"

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const skillBars = gsap.utils.toArray(".skill-bar")
    const skillItems = gsap.utils.toArray(".skill-item")
    const categoryCards = gsap.utils.toArray(".category-card")

    categoryCards.forEach((card: any, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    skillItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
    })

    skillBars.forEach((bar: any, index) => {
      gsap.from(bar, {
        width: 0,
        duration: 1.5,
        delay: index * 0.03,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 90%",
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

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Programming":
        return "from-blue-500 to-purple-600"
      case "Frontend":
        return "from-cyan-500 to-blue-600"
      case "Backend":
        return "from-green-500 to-emerald-600"
      case "Database":
        return "from-orange-500 to-red-600"
      case "Tools":
        return "from-purple-500 to-pink-600"
      case "Learning":
        return "from-yellow-500 to-orange-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return "👨‍💻"
      case "Frontend":
        return "🎨"
      case "Backend":
        return "⚙️"
      case "Database":
        return "🗄️"
      case "Tools":
        return "🛠️"
      case "Learning":
        return "📚"
      default:
        return "💡"
    }
  }

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            <span className={`bg-gradient-to-r ${colorTheme.gradients.primary} bg-clip-text text-transparent`}>
              SKILLS & EXPERTISE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in">
            A comprehensive overview of my technical skills, spanning programming languages, frameworks, databases, and
            emerging technologies I'm currently exploring.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
              className={`category-card bg-gradient-to-br ${getCategoryGradient(category)} p-1 rounded-2xl`}
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{getCategoryIcon(category)}</span>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                  <span className="ml-auto bg-white/10 px-2 py-1 rounded-full text-xs text-white">
                    {categorySkills.length}
                  </span>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar h-full rounded-full transition-all duration-300 hover:shadow-lg"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            boxShadow: `0 0 8px ${skill.color}40`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Journey</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              I believe in staying current with emerging technologies and continuously expanding my skill set. Currently
              exploring machine learning, mobile development, and advanced system architecture.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                AI/ML Engineering
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                DevOps & Cloud
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm">
                System Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
