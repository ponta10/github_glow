import React from 'react';
import { useTexture } from "@react-three/drei";
import { Cactus, Corn, Flower, Plant } from "./Plant";

interface DesertSceneProps {
  data: number;
}

export const Desert: React.FC<DesertSceneProps> = ({ data }) => {
  const sandTexture = useTexture("/desert2.jpeg");
  const gridSize = Math.ceil(Math.sqrt(data));
  const cellSize = 20 / gridSize;
  const offset = -10 + cellSize / 2;

  const positions = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = offset + i * cellSize;
      const z = offset + j * cellSize;
      positions.push([x, -0.8, z]);
    }
  }

  const selectPlantComponent = (index: number) => {
    let component, scale;
    if (data <= 500) {
      component = Cactus;
      scale = [6, 6, 6];
    } else if (data <= 1000) {
      const threshold = (data - 500) / 500;
      if (index / (gridSize * gridSize) < threshold) {
        component = Plant;
        scale = [0.002, 0.002, 0.002];
      } else {
        component = Cactus;
        scale = [6, 6, 6];
      }
    } else if (data <= 1500) {
      const threshold = (data - 1000) / 500;
      if (index / (gridSize * gridSize) < threshold) {
        component = Flower;
        scale = [0.03, 0.03, 0.03];
      } else {
        component = Plant;
        scale = [0.002, 0.002, 0.002];
      }
    } else if (data <= 2000) {
        const threshold = (data - 1500) / 500;
        if (index / (gridSize * gridSize) < threshold) {
          component = Corn;
          scale = [1, 1, 1];
        } else {
          component = Flower;
          scale = [0.03, 0.03, 0.03];
        }
      } else {
        component = Corn;
        scale = [1, 1, 1];
      }
    return { component, scale };
  };

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 5, 5]} intensity={3} color={"#FDB86D"} />
      {positions.map((position, index) => {
        const { component: PlantComponent, scale } = selectPlantComponent(index);
        return <PlantComponent key={index} position={position} scale={scale} />
      })}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 100, 100]} />
        <meshStandardMaterial map={sandTexture} />
      </mesh>
    </>
  );
}
