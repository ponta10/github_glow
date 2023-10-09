import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function Cactus({ position, scale }: any) {
  const gltf = useGLTF("/air_plant_v1.0.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Plant({ position, scale }: any) {
  const gltf = useGLTF("/plant_-_outdoors.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Flower({ position, scale }: any) {
  const gltf = useGLTF("/snapdragon.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Tomato({ position, scale }: any) {
  const gltf = useGLTF("/tomato.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}

export function Corn({ position, scale }: any) {
  const gltf = useGLTF("/corn.glb");
  const scene = useMemo(() => gltf.scene.clone(), [gltf]);
  return <primitive object={scene} position={position} scale={scale} />;
}
