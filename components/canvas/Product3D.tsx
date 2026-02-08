import React, { Suspense } from 'react';
import Scene from './Scene';
import Mug from './Mug';

interface Product3DProps {
    productType: string;
    image?: string;
    color?: string;
    isMagic?: boolean;
    isHot?: boolean;
}

const Product3D: React.FC<Product3DProps> = ({
    productType,
    image,
    color,
    isMagic,
    isHot
}) => {

    const renderModel = () => {
        switch (productType.toLowerCase()) {
            case 'taza':
            case 'taza mágica':
            case 'mug':
                return <Mug image={image} color={color} isMagic={isMagic} isHot={isHot} />;
            default:
                // Fallback for not-yet-implemented 3D models (show a placeholder or generic shape)
                return (
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={color || 'hotpink'} />
                    </mesh>
                );
        }
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
