import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface TShirtProps {
    image?: string;
    color?: string;
    rotation?: number;
}

const TShirt3D: React.FC<TShirtProps> = ({
    image,
    color = '#ffffff',
    rotation = 0
}) => {
    // Since procedural T-shirt is very hard without glb, we use a simple "Mannequin Torso" shape
    // approached by a flattened cylinder.

    return (
        <group dispose={null} position={[0, -1, 0]}>
            {/* Torso - Using Box with rounded segments instead of Cylinder for better fit */}
            <mesh castShadow receiveShadow position={[0, 1, 0]} scale={[1, 0.5, 1]}>
                <boxGeometry args={[1.6, 2.2, 0.8, 8, 8, 8]} /> {/* More segments for lighting */}
                <meshStandardMaterial
                    color={color}
                    roughness={0.9} // Texture of fabric
                    metalness={0.05}
                    flatShading={false}
                />
            </mesh>

            {/* Sleeves */}
            <mesh castShadow receiveShadow position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 2]}>
                <capsuleGeometry args={[0.26, 2.6, 8, 16]} />
                <meshStandardMaterial color={color} roughness={0.9} metalness={0.05} />
            </mesh>

            {/* Neck */}
            <mesh position={[0, 2.15, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
                <meshStandardMaterial color={color} roughness={0.8} />
            </mesh>

            {/* Texture Area (Chest) */}
            {image && (
                <TShirtTextureLayer image={image} rotation={rotation} />
            )}
        </group>
    );
};

const TShirtTextureLayer: React.FC<{ image: string, rotation: number }> = ({ image, rotation }) => {
    const texture = useTexture(image);
    return (
        /* Place texture on the flattened torso front */
        <mesh position={[0, 1.2, 0.45]} rotation={[0, 0, -rotation * (Math.PI / 180)]}>
            <planeGeometry args={[0.8, 0.8]} />
            <meshStandardMaterial
                transparent
                opacity={0.95}
                map={texture}
                side={THREE.DoubleSide}
                depthWrite={false} // Avoid z-fighting with torso
            />
        </mesh>
    );
};

export default TShirt3D;
