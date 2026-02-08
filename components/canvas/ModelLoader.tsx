import React, { useRef } from 'react';
import { useGLTF, useTexture, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { MeshProps } from '@react-three/fiber';

interface Model3DProps {
    modelPath: string;
    image?: string;
    scale?: number;
    rotation?: number; // Rotation of the decal
    meshName?: string; // Specific mesh to apply decal to (optional)
}

const ModelLoader: React.FC<Model3DProps> = ({
    modelPath,
    image,
    scale = 1,
    rotation = 0,
    meshName
}) => {
    const { nodes } = useGLTF(modelPath) as any; // Cast to any to avoid complex GLTF typing issues for now
    const texture = image ? useTexture(image) : null;

    // Render all nodes in the GLB
    return (
        <group dispose={null}>
            {Object.entries(nodes).map(([name, node]) => {
                // Check if node is a Mesh
                if ((node as any).isMesh) {
                    const mesh = node as THREE.Mesh;
                    const isTarget = meshName ? name === meshName : true;

                    return (
                        <mesh
                            key={name}
                            geometry={mesh.geometry}
                            material={mesh.material}
                            castShadow
                            receiveShadow
                        >
                            {/* Apply Decal if this is the target mesh and we have an image */}
                            {isTarget && texture && (
                                <Decal
                                    position={[0, 0, 1]}
                                    rotation={[0, 0, 0]}
                                    scale={[scale, scale, 1]}
                                    map={texture}
                                // Removed depthWrite to fix linter error, depthTest handles it
                                />
                            )}
                        </mesh>
                    );
                }
                return null;
            })}
        </group>
    );
};

export default ModelLoader;
