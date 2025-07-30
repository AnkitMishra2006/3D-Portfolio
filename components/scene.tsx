"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"
import HeroSection from "./hero-section"
import SkillsSection from "./skills-section"
import ProjectsSection from "./projects-section"
import ExperienceSection from "./experience-section"
import ContactSection from "./contact-section"

export default function Scene() {
  const { camera } = useThree()
  const [currentSection, setCurrentSection] = useState(0)
  const groupRef = useRef<THREE.Group>(null)

  const sections = [
    { name: "Hero", position: [0, 0, 0] },
    { name: "Skills", position: [0, -20, 0] },
    { name: "Projects", position: [0, -40, 0] },
    { name: "Experience", position: [0, -60, 0] },
    { name: "Contact", position: [0, -80, 0] },
  ]

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault()
      const delta = event.deltaY > 0 ? 1 : -1
      const newSection = Math.max(0, Math.min(sections.length - 1, currentSection + delta))
      setCurrentSection(newSection)
    }

    window.addEventListener("wheel", handleScroll, { passive: false })
    return () => window.removeEventListener("wheel", handleScroll)
  }, [currentSection, sections.length])

  useFrame((state) => {
    const targetY = sections[currentSection].position[1]
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -targetY, 0.05)

    // Subtle camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.5
    camera.position.z = 10 + Math.sin(state.clock.elapsedTime * 0.1) * 0.5
  })

  return (
    <>
      <Environment preset="night" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

      <group ref={groupRef}>
        <HeroSection position={[0, 0, 0]} />
        <SkillsSection position={[0, -20, 0]} />
        <ProjectsSection position={[0, -40, 0]} />
        <ExperienceSection position={[0, -60, 0]} />
        <ContactSection position={[0, -80, 0]} />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}
