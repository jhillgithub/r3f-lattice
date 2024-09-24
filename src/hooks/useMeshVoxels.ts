import { useThree } from "@react-three/fiber";
import { useCallback } from "react";
import { Box3, Mesh, Raycaster, Vector3 } from "three";

const isInsideMesh = (
  point: Vector3,
  mesh: Mesh,
  raycaster: Raycaster,
  direction: Vector3 = new Vector3(0, 1, 0)
) => {
  raycaster.set(point, direction);
  const intersections = raycaster.intersectObject(mesh, true);
  return intersections.length % 2 === 1;
};

export const useMeshVoxels = () => {
  const { raycaster } = useThree();

  const calculateVoxelPoints = useCallback(
    (mesh: Mesh, cellSize: number) => {
      mesh.updateMatrixWorld(true);
      const bounds = new Box3().setFromObject(mesh);
      const min = bounds.min;
      const max = bounds.max;

      const voxels: Vector3[] = [];

      for (let x = min.x; x < max.x; x += cellSize) {
        for (let y = min.y; y < max.y; y += cellSize) {
          for (let z = min.z; z < max.z; z += cellSize) {
            const point = new Vector3(
              x + cellSize / 2,
              y + cellSize / 2,
              z + cellSize / 2
            );

            if (isInsideMesh(point, mesh, raycaster)) {
              voxels.push(point);
            }
          }
        }
      }
      return voxels;
    },
    [raycaster]
  );
  return { calculateVoxelPoints };
};
