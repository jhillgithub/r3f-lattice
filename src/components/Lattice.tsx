import {
  ComponentType,
  ReactElement,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Mesh, Vector3 } from "three";
import { useMeshVoxels } from "../hooks/useMeshVoxels";

type LatticeProps<CellProps> = {
  cellSize: number;
  children: ReactElement;
  CellComponent: ComponentType<CellProps>;
  cellProps?: CellProps;
};

const Lattice = <CellProps,>({
  cellSize,
  children,
  CellComponent,
  cellProps = {} as CellProps,
}: LatticeProps<CellProps>) => {
  const [points, setPoints] = useState<Vector3[]>([]);
  const meshRef = useRef<Mesh>(null);
  const { calculateVoxelPoints } = useMeshVoxels();

  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    const voxelPoints = calculateVoxelPoints(mesh, cellSize);
    setPoints(voxelPoints);
  }, [calculateVoxelPoints, cellSize]);

  const meshWithRef = cloneElement(children, { ref: meshRef });

  return (
    <>
      {meshWithRef}
      {points.map((point, index) => (
        <group key={index} position={point} scale={cellSize}>
          <CellComponent key={index} {...cellProps} />
        </group>
      ))}
    </>
  );
};

export default Lattice;
