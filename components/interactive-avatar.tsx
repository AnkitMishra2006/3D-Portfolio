"use client"

import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import type * as THREE from "three"

export default function InteractiveAvatar() {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.rotation.y += 0.01
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Avatar Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere
          ref={meshRef}
          args={[1.2, 64, 64]}
          scale={clicked ? 1.2 : hovered ? 1.1 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setClicked(true)}
          onPointerUp={() => setClicked(false)}
        >
          <MeshDistortMaterial
            color={hovered ? "#ff00ff" : "#00ffff"}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Elements */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2, 1, 0]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[-2, -0.5, 0.5]}>
          <tetrahedronGeometry args={[0.15]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Float speed={4} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[0, -2, -1]}>
          <icosahedronGeometry args={[0.18]} />
          <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      {/* Particle Ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2
        return (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[Math.cos(angle) * 3, Math.sin(angle) * 0.5, Math.sin(angle) * 3]}>
              <sphereGeometry args={[0.05]} />
              <meshStandardMaterial
                color={`hsl(${i * 30}, 70%, 60%)`}
                emissive={`hsl(${i * 30}, 70%, 30%)`}
                emissiveIntensity={0.3}
              />
            </mesh>
          </Float>
        )
      })}

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <spotLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </group>
  )
}
