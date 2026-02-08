import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface CapProps {
    image?: string;
    color?: string; // Main color (visor + front)
    meshColor?: string; // Mesh back color
    rotation?: number;
}

const Cap: React.FC<CapProps> = ({
    image,
    color = '#ffffff',
    meshColor = '#1e3a8a', // Default blue mesh
    rotation = 0
}) => {
    const groupRef = useRef<THREE.Group>(null);

    return (
        <group ref={groupRef} dispose={null} position={[0, -0.5, 0]}>
            {/* Front Panel (White Foam) */}
            <mesh castShadow receiveShadow position={[0, 0.5, 0.2]} rotation={[-Math.PI / 12, 0, 0]}>
                {/* Half sphere segment for front */}
                <sphereGeometry args={[0.92, 64, 32, 0, Math.PI, 0, Math.PI / 2.5]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.6} // Fabric/Foam
                />
            </mesh>

            {/* Back Mesh */}
            <mesh position={[0, 0.5, 0.2]} rotation={[-Math.PI / 12, Math.PI, 0]}>
                <sphereGeometry args={[0.9, 64, 32, 0, Math.PI, 0, Math.PI / 2.5]} />
                <meshStandardMaterial
                    color={meshColor}
                    roughness={0.8}
                    wireframe={true} // Simulate mesh easily!
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Visor */}
            <mesh castShadow receiveShadow position={[0, 0.3, 1]} rotation={[Math.PI / 6, 0, 0]}>
                {/* Flattened cylinder/box for visor */}
                <cylinderGeometry args={[1, 1, 0.1, 64, 1, false, 0, Math.PI]} />
                <meshStandardMaterial color={meshColor} roughness={0.6} />
            </mesh>

            {/* Button on top */}
            <mesh position={[0, 1.35, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color={meshColor} />
            </mesh>

            {/* Textured Layer on Front Panel */}
            {image && (
                <CapTextureLayer image={image} rotation={rotation} />
            )}
        </group>
    );
};

const CapTextureLayer: React.FC<{ image: string, rotation: number }> = ({ image, rotation }) => {
    const texture = useTexture(image);

    return (
        <mesh position={[0, 0.5, 0.21]} rotation={[-Math.PI / 12, 0, rotation * (Math.PI / 180)]}>
            {/* Slightly larger sphere segment overlay */}
            <sphereGeometry args={[0.93, 64, 32, 0, Math.PI, Math.PI / 6, Math.PI / 3]} />
            <meshStandardMaterial
                transparent
                opacity={0.95}
                map={texture}
                side={THREE.DoubleSide}
                roughness={0.6}
                depthTest={true}
                depthWrite={false}
            />
        </mesh>
    );
};

export default Cap;
