import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, useTexture } from "@react-three/drei";
import { Cactus, Corn, Flower, Plant, Tomato } from "./Plant";

function Desert() {
  const sandTexture = useTexture("/desert2.jpeg");
  const numCacti = 100;
  const positions = Array.from({ length: numCacti }, () => [
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
      <Plant key={101} position={[0, -1, 1]} scale={[0.002, 0.002, 0.002]} />
      <Flower key={102} position={[0.25, -1, 1]} scale={[0.05, 0.05, 0.05]} />
      <Tomato key={103} position={[2, -1, 1]} scale={[1.5, 1.5, 1.5]} />
      <Corn key={104} position={[-2, -1, 1]} scale={[1, 1, 1]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[20, 20, 100, 100]} />
        <meshStandardMaterial map={sandTexture} />
      </mesh>
    </>
  );
}

export default function DesertScene() {
  return (
    <Canvas style={{ width: "100%", height: "100vh" }}>
      <OrbitControls />
      <Sky
        sunPosition={[0, 0.08, -0.15]}
        turbidity={5}
        rayleigh={0.1}
        mieCoefficient={0.0005}
        mieDirectionalG={0.9}
      />
      <Desert />
    </Canvas>
  );
}
