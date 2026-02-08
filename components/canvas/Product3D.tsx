import React, { Suspense } from 'react';
import Scene from './Scene';
import Mug from './Mug';
import Bottle from './Bottle';
import Cap from './Cap';
import TShirt3D from './TShirt3D';
import ModelLoader from './ModelLoader';

interface Product3DProps {
    productType: string;
    image?: string;
    color?: string;
    isMagic?: boolean;
    isHot?: boolean;
    modelUrl?: string; // New: Path to .glb file
}

const Product3D: React.FC<Product3DProps> = ({
    productType,
    image,
    color,
    isMagic,
    isHot,
    modelUrl
}) => {

    const renderModel = () => {
        // Priority: Custom GLB Model > Procedural Model
        if (modelUrl) {
            return <ModelLoader modelPath={modelUrl} image={image} />;
        }

        const type = productType.toLowerCase();

        if (type.includes('taza') || type.includes('mug')) {
            return <Mug image={image} color={color} isMagic={isMagic} isHot={isHot} />;
        }

        if (type.includes('botella') || type.includes('bottle')) {
            return <Bottle image={image} color={color} />;
        }

        if (type.includes('gorra') || type.includes('cap')) {
            return <Cap image={image} color={color} />;
        }

        if (type.includes('camis') || type.includes('shirt') || type.includes('playera')) {
            return <TShirt3D image={image} color={color} />;
        }

        // Default Fallback
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color || 'hotpink'} />
            </mesh>
        );
    };

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
            <Scene>
                {renderModel()}
            </Scene>
        </div>
    );
};

export default Product3D;
