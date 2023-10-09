import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, useGLTF, useTexture } from '@react-three/drei';
import { useMemo } from 'react';

function Cactus({ position, scale }: any) {
    const gltf = useGLTF('/air_plant_v1.0.glb');
    const scene = useMemo(() => gltf.scene.clone(), [gltf]);
    return <primitive object={scene} position={position} scale={scale} />;
}

function Desert() {
    const sandTexture = useTexture('/desert2.jpeg');
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1} color={'#ffffff'} />
            <Cactus key="cactus1" position={[0, -0.5, -2]} scale={[6, 6, 6]} />
            <Cactus key="cactus2" position={[3, -0.5, -2]} scale={[6, 6, 6]} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
                <planeGeometry args={[20, 20, 100, 100]} />
                <meshStandardMaterial map={sandTexture} />
            </mesh>
        </>
    );
}


export default function DesertScene() {
  return (
    <Canvas style={{ width: '100%', height: '100vh' }}>
      <OrbitControls />
      <Sky sunPosition={[0, 1, 0]} />
      <Desert />
    </Canvas>
  );
}

