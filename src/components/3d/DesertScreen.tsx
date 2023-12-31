"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Desert } from "./Desert/Desert";

interface DesertSceneProps {
  data: number;
}

const MyCamera = () => {
  const { camera } = useThree();
  camera.position.z = 16;
  camera.position.y = 2;
  camera.lookAt(0, 0, 0);
  return null;
};

export const DesertScene: React.FC<DesertSceneProps> = ({ data }) => {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <MyCamera />
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
};
