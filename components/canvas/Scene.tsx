import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';

interface SceneProps {
    children: React.ReactNode;
}

const Scene: React.FC<SceneProps> = ({ children }) => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 4], fov: 45 }}
            style={{ background: '#e0e0e0', borderRadius: '1.5rem', width: '100%', height: '100%' }} // Darker gray for contrast
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />

            <Suspense fallback={null}>
                <group position={[0, -0.5, 0]}>
                    {children}
                </group>
                <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.25} far={10} color="#000000" />
                <Environment preset="studio" />
            </Suspense>

            <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />
        </Canvas>
    );
};

export default Scene;
