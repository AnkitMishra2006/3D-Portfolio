"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"

export default function MinimalScene() {
  const group1Ref = useRef<THREE.Group>(null)
  const group2Ref = useRef<THREE.Group>(null)
  const group3Ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (group1Ref.current) {
      group1Ref.current.rotation.x = time * 0.1
      group1Ref.current.rotation.y = time * 0.15
      group1Ref.current.position.y = Math.sin(time * 0.5) * 0.5
    }

    if (group2Ref.current) {
      group2Ref.current.rotation.x = -time * 0.1
      group2Ref.current.rotation.z = time * 0.1
      group2Ref.current.position.x = Math.cos(time * 0.3) * 2
    }

    if (group3Ref.current) {
      group3Ref.current.rotation.y = time * 0.2
      group3Ref.current.position.z = Math.sin(time * 0.4) * 1
    }
  })

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={2000} factor={2} saturation={0} fade speed={0.5} />

      {/* Minimal floating shapes */}
      <group ref={group1Ref} position={[5, 2, -5]}>
        <mesh>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#00ffff" wireframe transparent opacity={0.6} />
        </mesh>
      </group>

      <group ref={group2Ref} position={[-6, -1, -3]}>
        <mesh>
          <icosahedronGeometry args={[0.7]} />
          <meshStandardMaterial color="#ff00ff" wireframe transparent opacity={0.4} />
        </mesh>
      </group>

      <group ref={group3Ref} position={[3, -3, -7]}>
        <mesh>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#00ff00" wireframe transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Additional small particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20]}>
          <sphereGeometry args={[0.02]} />
          <meshStandardMaterial color={`hsl(${i * 36}, 70%, 60%)`} />
        </mesh>
      ))}
    </>
  )
}
