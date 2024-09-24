import { Torus } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, Mesh, Vector3 } from "three";
import { useMeshVoxels } from "../hooks/useMeshVoxels";
import LatticeCell from "./LatticeCell";

type LatticeProps = {
  cellSize: number;
};
const Lattice = ({ cellSize }: LatticeProps) => {
  const [points, setPoints] = useState<Vector3[]>([]);
  const meshRef = useRef<Mesh>(null);
  const { calculateVoxelPoints } = useMeshVoxels();

  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const voxelPoints = calculateVoxelPoints(mesh, cellSize);
    setPoints(voxelPoints);
  }, [calculateVoxelPoints, cellSize]);

  return (
    <>
      <Torus ref={meshRef}>
        <meshStandardMaterial wireframe side={DoubleSide} />
      </Torus>
      {points.map((point, index) => (
        <LatticeCell key={index} position={point} size={cellSize} />
      ))}
    </>
  );
};

export default Lattice;
