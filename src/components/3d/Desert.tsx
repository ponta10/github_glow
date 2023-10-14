import React from "react";
import { useTexture } from "@react-three/drei";
import { Cactus, Corn, Flower, Grass, Plant } from "./Plant";
import { ScaleObject } from "@/utils/const";

interface DesertSceneProps {
  data: number;
}

export const Desert: React.FC<DesertSceneProps> = ({ data }) => {
  const sandTexture = useTexture("/desert.jpeg");
  const gridSize = Math.ceil(Math.sqrt(data));
  const cellSize = 20 / gridSize;
  const offset = -10 + cellSize / 2;

  const positions: [number, number, number][] = [];
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const x = offset + i * cellSize;
      const z = offset + j * cellSize;
      positions.push([x, -0.8, z]);
    }
  }

  const scaleObj: ScaleObject = {
    cactus: [6, 6, 6],
    plant: [0.0025, 0.0025, 0.0025],
    grass: [0.0003, 0.0003, 0.0003],
    flower: [0.03, 0.03, 0.03],
    corn: [0.8, 0.8, 0.8],
  };

  const selectPlantComponent = (index: number) => {
    let component, scale: [number, number, number];
    const positionRatio = index / (gridSize * gridSize);

    if (data <= 299) {
      component = Cactus;
      const growthFactor = data / 299;
      scale = scaleObj.cactus.map((dim) => dim * growthFactor) as [
        number,
        number,
        number,
      ];
    } else if (data <= 999) {
      const threshold = (data - 299) / (999 - 299);
      if (positionRatio < threshold) {
        component = Grass;
        scale = scaleObj.grass;
      } else {
        component = Cactus;
        scale = scaleObj.cactus;
      }
    } else if (data <= 1999) {
      const threshold = (data - 999) / (1999 - 999);
      if (positionRatio < threshold) {
        component = Plant;
        scale = scaleObj.plant;
      } else {
        component = Grass;
        scale = scaleObj.grass;
      }
    } else if (data <= 3999) {
      const threshold = (data - 1999) / (3999 - 1999);
      if (positionRatio < threshold) {
        component = Flower;
        scale = scaleObj.flower;
      } else {
        component = Plant;
        scale = scaleObj.plant;
      }
    } else {
      const threshold = (data - 3999) / (10000 - 3999);
      if (positionRatio < threshold) {
        component = Corn;
        scale = scaleObj.corn;
      } else {
        component = Flower;
        scale = scaleObj.flower;
      }
    }
    return { component, scale };
  };

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 5, 5]} intensity={3} color={"#FDB86D"} />
      {positions.map((position, index) => {
        const { component: PlantComponent, scale } =
          selectPlantComponent(index);
        return <PlantComponent key={index} position={position} scale={scale} />;
      })}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 100, 100]} />
        <meshStandardMaterial map={sandTexture} />
      </mesh>
    </>
  );
};
