"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, useTexture } from "@react-three/drei";
import { Cactus, Corn, Flower, Plant } from "./Plant";

interface DesertSceneProps {
  data: number;
}

const MyCamera = () => {
  const { camera } = useThree();
  camera.position.z = 12;
  camera.position.y = 2;
  camera.lookAt(0, 0, 0);
  return null;
};

const Desert: React.FC<DesertSceneProps> = ({
  data
}) => {
  const sandTexture = useTexture("/desert2.jpeg");
  const numCacti = data;
  const positions = Array.from({ length: numCacti }, () => [
    (Math.random() - 0.5) * 20,
    -0.8,
    (Math.random() - 0.5) * 20,
  ]);
  const plantPositions = Array.from({ length: numCacti - 500 }, () => [
    (Math.random() - 0.5) * 20,
    -0.8,
    (Math.random() - 0.5) * 20,
  ]);
  const flowerPositions = Array.from({ length: numCacti - 1000 }, () => [
    (Math.random() - 0.5) * 20,
    -0.8,
    (Math.random() - 0.5) * 20,
  ]);
  const cornPositions = Array.from({ length: numCacti - 5000 }, () => [
    (Math.random() - 0.5) * 20,
    -0.8,
    (Math.random() - 0.5) * 20,
  ]);
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 5, 5]} intensity={3} color={"#FDB86D"} />
      {positions.map((position, index) => (
        <Cactus key={index} position={position} scale={[6, 6, 6]} />
      ))}
      {plantPositions.map((position, index) => (
        <Plant key={index} position={position} scale={[0.002, 0.002, 0.002]} />
      ))}
      {flowerPositions.map((position, index) => (
        <Flower key={index} position={position} scale={[0.03, 0.03, 0.03]} />
      ))}
      {cornPositions.map((position, index) => (
        <Corn key={index} position={position} scale={[1, 1, 1]} />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 100, 100]} />
        <meshStandardMaterial map={sandTexture} />
      </mesh>
    </>
  );
}

export const DesertScene: React.FC<DesertSceneProps> = ({
  data
}) => {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <MyCamera />
      <OrbitControls />
      <Sky
        sunPosition={[0, 0.08, -0.15]}
        turbidity={5}
        rayleigh={0.1}
        mieCoefficient={0.0005}
        mieDirectionalG={0.9}
      />
      <Desert data={data} />
    </Canvas>
  );
}
