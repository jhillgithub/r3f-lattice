import { useMemo } from "react";
import { ExtrudeGeometry } from "three";
import { useHexagonTileShape } from "../hooks/useHexagonTileShape";
import { MeshProps } from "@react-three/fiber";

type HexagonTileProps = {
  tileWidth?: number;
  tileHeight?: number;
  hexagonRadius?: number;
  extrusionDepth?: number;
} & MeshProps;

const HexagonTile = ({
  tileWidth = 1,
  tileHeight = 1,
  hexagonRadius = 0.5,
  extrusionDepth = 1,
  ...props
}: HexagonTileProps) => {
  const shape = useHexagonTileShape(tileWidth, tileHeight, hexagonRadius);

  const geometry = useMemo(
    () =>
      new ExtrudeGeometry(shape, {
        depth: extrusionDepth,
        bevelEnabled: false,
      }),
    [shape, extrusionDepth]
  );

  geometry.center();

  return (
    <mesh geometry={geometry} {...props}>
      <meshNormalMaterial />
    </mesh>
  );
};

export default HexagonTile;
