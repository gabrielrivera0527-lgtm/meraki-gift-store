import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface MugProps {
    image?: string;
    color?: string;
    isMagic?: boolean;
    isHot?: boolean;
    scale?: number;
    rotation?: number;
}

const Mug: React.FC<MugProps> = ({
    image,
    color = '#ffffff',
    isMagic = false,
    isHot = true,
    rotation = 0
}) => {
    const meshRef = useRef<THREE.Group>(null);

    // Determine base color
    const baseColor = isMagic && !isHot ? '#111111' : color;

    // Safe texture loading
    // We condition the hook execution. If image is undefined, useTexture is not called with undefined.
    // Note: Hooks rules say don't do this conditionally, but if Component structure changes it's fine.
    // Better pattern: Separate component for the textured part.

    return (
        <group ref={meshRef} dispose={null} position={[0, -0.5, 0]}>
            {/* Main Body */}
            <mesh castShadow receiveShadow position={[0, 0.75, 0]}>
                <cylinderGeometry args={[0.7, 0.7, 1.5, 64]} />
                <meshStandardMaterial
                    color={baseColor}
                    roughness={0.1} // Glossy ceramic
                    metalness={0.0}
                    envMapIntensity={1.2}
                />
            </mesh>

            {/* Textured Wrap Layer (Only if image provided) */}
            {image && (isHot || !isMagic) && (
                <MugTextureLayer image={image} rotation={rotation} />
            )}

            {/* Handle */}
            <mesh castShadow receiveShadow position={[0.7, 0.6, 0]} rotation={[0, 0, 0]}>
                <torusGeometry args={[0.35, 0.08, 16, 32]} />
                <meshStandardMaterial color={baseColor} roughness={0.15} metalness={0.1} />
            </mesh>

            {/* Inside */}
            <mesh position={[0, 0.76, 0]}>
                <cylinderGeometry args={[0.65, 0.65, 1.48, 32]} />
                <meshStandardMaterial color="#eeeeee" side={THREE.BackSide} />
            </mesh>
        </group>
    );
};

// Sub-component to safely use useTexture hook
const MugTextureLayer: React.FC<{ image: string, rotation: number }> = ({ image, rotation }) => {
    // This hook must be inside a component that is only rendered when we need it
    const texture = useTexture(image);

    // Fix texture wrapping/encoding using standard three.js settings directly on the texture object is tricky inside render 
    // but <meshStandardMaterial> handles map automatically.
    // Ideally we want RepeatWrapping but Clamping is better for a sticker.

    return (
        <mesh position={[0, 0.75, 0]} rotation={[0, -Math.PI / 2 + (rotation * Math.PI / 180), 0]}>
            {/* Slightly larger cylinder to avoid z-fighting */}
            <cylinderGeometry args={[0.705, 0.705, 1.5, 64, 1, true, 0, Math.PI * 1.2]} />
            {/* thetaLength restricted to show it only on one side roughly */}
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

export default Mug;
