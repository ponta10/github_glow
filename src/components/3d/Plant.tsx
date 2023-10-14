import { useGLTF } from "@react-three/drei";
import { useMemo, ReactElement } from "react";
import { Vector3 } from "three";

interface PlantProps {
  position: Vector3 | [number, number, number];
  scale: Vector3 | [number, number, number];
}

export function Cactus({ position, scale }: PlantProps): ReactElement {
  const gltf = useGLTF("/air_plant_v1.0.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Plant({ position, scale }: PlantProps): ReactElement {
  const gltf = useGLTF("/plant_-_outdoors.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Grass({ position, scale }: PlantProps): ReactElement {
  const gltf = useGLTF("/grass.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Flower({ position, scale }: PlantProps): ReactElement {
  const gltf = useGLTF("/snapdragon.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Corn({ position, scale }: PlantProps): ReactElement {
  const gltf = useGLTF("/corn.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}
