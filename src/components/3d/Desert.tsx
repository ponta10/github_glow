"use client";
import { useTexture } from "@react-three/drei";
import { Cactus, Corn, Flower, Plant } from "./Plant";

interface DesertSceneProps {
  data: number;
}

export const Desert: React.FC<DesertSceneProps> = ({
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