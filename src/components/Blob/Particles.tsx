import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, BufferGeometry, Float32BufferAttribute } from 'three'; // Explicit imports
import { PointMaterial } from '@react-three/drei'; // Correct import for PointMaterial
import { SphereGeometry } from 'three';

const Particles = () => {
    const particlesRef = useRef<Points>(null!); // Explicitly type the ref

    // Generate random initial positions for particles
    const particlesPosition = useMemo(() => {
        const positions = [];
        for (let i = 0; i < 1000; i++) { // Adjust the number of particles
            const x = (Math.random() - 0.5) * 5; // Spread on X-axis
            const y = (Math.random() - 0.5) * 5; // Spread on Y-axis
            const z = (Math.random() - 0.5) * 5; // Spread on Z-axis
            positions.push(x, y, z);
        }
        return new Float32BufferAttribute(positions, 3); // Create BufferAttribute
    }, []);

    // Rotate particles over time
    useFrame(() => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y += 0.002; // Slow rotation
            particlesRef.current.rotation.x += 0.001; // Subtle tilt
        }
    });

    useFrame(({ clock }) => {
        if (particlesRef.current) {
            const time = clock.getElapsedTime();
            const scale = 1 + Math.sin(time * 2) * 0.02; // Pulses between 1 and 1.05
            particlesRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <points ref={particlesRef}>
            {/* Particle Geometry */}
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    {...particlesPosition}
                />
            </bufferGeometry>
            {/* Particle Material */}
            <PointMaterial
                size={0.05} // Particle size
                color="#4fadff" // Base particle color
                transparent={true}
                opacity={0.5} // Semi-transparent for glassy effect
                sizeAttenuation={true} // Particles shrink with distance
                depthWrite={false}
            >
                {/* Add emissive or reflective highlights */}
                <meshStandardMaterial 
                    emissive="#6dc1ff" // Emissive bluish tint
                    roughness={0.1} // Less rough for a reflective effect
                    metalness={0.5} // Make particles metallic for reflections
                />
            </PointMaterial>
        </points>
    );
};

export default Particles;
