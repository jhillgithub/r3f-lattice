import { Torus } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, Mesh, Vector3 } from "three";
import { useMeshVoxels } from "../hooks/useMeshVoxels";
import LatticeCell from "./LatticeCell";
import Lights from "./Lights";

const Scene = () => {
  const [points, setPoints] = useState<Vector3[]>([]);
  const meshRef = useRef<Mesh>(null);
  const { calculateVoxelPoints } = useMeshVoxels();

  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const voxelPoints = calculateVoxelPoints(mesh, 0.2);
    setPoints(voxelPoints);
  }, [calculateVoxelPoints]);

  return (
    <>
      <Lights />
      <Torus ref={meshRef}>
        <meshStandardMaterial wireframe side={DoubleSide} />
      </Torus>
      {points.map((point, index) => (
        <LatticeCell key={index} position={point} size={0.2} />
      ))}
    </>
  );
};

export default Scene;
