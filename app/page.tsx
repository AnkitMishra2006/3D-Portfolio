"use client"

import { useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import MinimalScene from "@/components/minimal-scene"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Portfolio() {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.set(".fade-in", { opacity: 0, y: 50 })
    gsap.set(".slide-in-left", { opacity: 0, x: -100 })
    gsap.set(".slide-in-right", { opacity: 0, x: 100 })
    gsap.set(".scale-in", { opacity: 0, scale: 0.8 })

    // Animate elements on scroll
    gsap.utils.toArray(".fade-in").forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })
    })

    gsap.utils.toArray(".slide-in-left").forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    gsap.utils.toArray(".slide-in-right").forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    gsap.utils.toArray(".scale-in").forEach((element: any) => {
      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    // Parallax effect for 3D canvas
    gsap.to(".three-canvas", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 three-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Suspense fallback={null}>
            <MinimalScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  )
}
