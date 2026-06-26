import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Sparkles, Sphere, Float } from '@react-three/drei'
import * as THREE from 'three'

function NetworkShape() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef}>
                {/* Outer wireframe */}
                <Icosahedron args={[2.5, 2]}>
                    <meshBasicMaterial color="#ffffff" wireframe opacity={0.15} transparent />
                </Icosahedron>

                {/* Inner smaller wireframe */}
                <Icosahedron args={[1.5, 1]}>
                    <meshBasicMaterial color="#ffffff" wireframe opacity={0.3} transparent />
                </Icosahedron>

                {/* Center glowing core */}
                <Sphere args={[0.5, 32, 32]}>
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
                </Sphere>

                {/* Floating data particles */}
                <Sparkles count={300} scale={6} size={1.5} speed={0.4} opacity={0.4} color="#ffffff" />
            </group>
        </Float>
    )
}

export default function NetworkAnimation() {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative cursor-pointer group">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                <ambientLight intensity={1} />
                <NetworkShape />
            </Canvas>
        </div>
    )
}
