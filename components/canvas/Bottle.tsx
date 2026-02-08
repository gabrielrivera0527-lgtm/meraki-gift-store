import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface BottleProps {
    image?: string;
    color?: string;
    scale?: number;
    rotation?: number;
}

const Bottle: React.FC<BottleProps> = ({
    image,
    color = '#ffffff',
    rotation = 0
}) => {
    const meshRef = useRef<THREE.Group>(null);

    return (
        <group ref={meshRef} dispose={null} position={[0, -1, 0]}>
            {/* Body */}
            <mesh castShadow receiveShadow position={[0, 1, 0]}>
                <cylinderGeometry args={[0.65, 0.65, 2.0, 64]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.6} // Aluminum look
                />
            </mesh>

            {/* Textured Wrap Layer */}
            {image && (
                <BottleTextureLayer image={image} rotation={rotation} />
            )}

            {/* Neck */}
            <mesh castShadow receiveShadow position={[0, 2.1, 0]}>
                <cylinderGeometry args={[0.25, 0.4, 0.4, 32]} />
                <meshStandardMaterial color={color} roughness={0.2} metalness={0.6} />
            </mesh>

            {/* Cap/Lid (Black usually) */}
            <mesh castShadow position={[0, 2.4, 0]}>
                <cylinderGeometry args={[0.26, 0.26, 0.3, 32]} />
                <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.1} />
            </mesh>

            {/* Carabiner Ring (Torus) */}
            <mesh castShadow position={[0.3, 2.4, 0]} rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[0.1, 0.03, 16, 32]} />
                <meshStandardMaterial color="#cccccc" roughness={0.1} metalness={0.9} />
            </mesh>

        </group>
    );
};

// Texture Layer
const BottleTextureLayer: React.FC<{ image: string, rotation: number }> = ({ image, rotation }) => {
    const texture = useTexture(image);

    return (
        <mesh position={[0, 1, 0]} rotation={[0, -Math.PI / 2 + (rotation * Math.PI / 180), 0]}>
            {/* Slightly larger cylinder */}
            <cylinderGeometry args={[0.66, 0.66, 1.8, 64, 1, true, 0, Math.PI * 1.2]} />
            <meshStandardMaterial
                transparent
                opacity={0.95}
                map={texture}
                side={THREE.DoubleSide}
                roughness={0.4}
                depthTest={true}
                depthWrite={false}
            />
        </mesh>
    );
};

export default Bottle;
