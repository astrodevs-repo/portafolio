import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Brain3D = () => {
  const { nodes } = useGLTF("/public/GLB/Brain.gltf");
  const meshRef = useRef();
  return (
    <group ref={meshRef} position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
      <primitive object={nodes.Scene} />
    </group>
  );
};
useGLTF.preload("/public/GLB/Brain.gltf");

export default Brain3D;
