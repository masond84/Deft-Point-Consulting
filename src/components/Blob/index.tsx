import React, { useMemo, useRef } from "react";
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useFrame } from "@react-three/fiber";
import { Mesh, BufferGeometry, ShaderMaterial, MathUtils } from 'three'; // Explicit imports

const Blob = () => {
    const mesh = useRef<Mesh<BufferGeometry, ShaderMaterial>>(null!);
    const hover = useRef(false);
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: 0.3 },
        };
    }, []);

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            mesh.current.material.uniforms.u_time.value =
                0.4 * clock.getElapsedTime();
    
            mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
                mesh.current.material.uniforms.u_intensity.value,
                hover.current ? 1 : 0.15,
                0.02
            );
        }
    });

    return (
        <mesh
            ref={mesh}
            scale={window.innerWidth < 768 ? 1.0 : 1.5} // Adjust based on screen size
            position={[0, 0, 0]}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronGeometry args={[2, 20]} />

            <shaderMaterial 
                vertexShader={vertexShader} 
                fragmentShader={fragmentShader}  
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default Blob;