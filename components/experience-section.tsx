"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const experiences = [
  {
    title: "Teacher",
    company: "Compassion Academy",
    period: "May '23 — Jul '23",
    description:
      "Taught mathematics to students of classes 9th and 10th, focusing on foundational concepts, problem-solving, and logical reasoning. Designed lesson plans and interactive exercises to enhance student understanding.",
    type: "work",
  },
  {
    title: "B.Tech in Computer Science Engineering",
    company: "Maharaja Surajmal Institute of Technology",
    period: "Aug '23 — Present",
    description:
      "Currently pursuing Bachelor's degree with GPA: 8.092. Focusing on advanced programming concepts, data structures, algorithms, and software engineering principles.",
    type: "education",
  },
]

const competitions = [
  "Build With India Competition",
  "EduChain Regional Hackathon",
  "Nation Building Competition",
  "Smart Delhi Ideathon",
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timelineItems = gsap.utils.toArray(".timeline-item")
    const competitionItems = gsap.utils.toArray(".competition-item")

    timelineItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 1,
        delay: index * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    })

    competitionItems.forEach((item: any, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
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

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 fade-in">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">EXPERIENCE</span>
        </h2>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item flex items-center mb-12 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black"></div>
            </div>
          ))}
        </div>

        {/* Competitions */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8 slide-in-left">Competitions & Hackathons</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {competitions.map((competition, index) => (
              <div
                key={index}
                className="competition-item bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              >
                <p className="text-white font-medium">{competition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
