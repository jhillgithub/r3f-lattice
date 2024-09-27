import { GroupProps } from "@react-three/fiber";
import HexagonTile from "./HexagonTile";

type HexagonCellProps = {
  width?: number;
  height?: number;
  depth?: number;
  hexagonRadius?: number;
  extrusionDepth?: number;
} & GroupProps;

const HexagonCell = ({
  width = 1,
  height = 1,
  depth = 1,
  hexagonRadius = 0.45,
  extrusionDepth = 0.05,
  ...groupProps
}: HexagonCellProps) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const halfDepth = depth / 2;

  return (
    <group {...groupProps}>
      {/* Front face - full size */}
      <HexagonTile
        position={[0, 0, halfDepth - extrusionDepth / 2]}
        rotation={[0, 0, 0]}
        tileWidth={width}
        tileHeight={height}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
      {/* Back face - full size */}
      <HexagonTile
        position={[0, 0, -halfDepth + extrusionDepth / 2]}
        rotation={[0, Math.PI, 0]}
        tileWidth={width}
        tileHeight={height}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
      {/* Top face - width and height adjusted */}
      <HexagonTile
        position={[0, halfHeight - extrusionDepth / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        tileWidth={width - extrusionDepth * 2}
        tileHeight={depth - extrusionDepth * 2}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
      {/* Bottom face - width and height adjusted */}
      <HexagonTile
        position={[0, -halfHeight + extrusionDepth / 2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        tileWidth={width - extrusionDepth * 2}
        tileHeight={depth - extrusionDepth * 2}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
      {/* Right face - only width adjusted */}
      <HexagonTile
        position={[halfWidth - extrusionDepth / 2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        tileWidth={depth - extrusionDepth * 2}
        tileHeight={height}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
      {/* Left face - only width adjusted */}
      <HexagonTile
        position={[-halfWidth + extrusionDepth / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        tileWidth={depth - extrusionDepth * 2}
        tileHeight={height}
        hexagonRadius={hexagonRadius}
        extrusionDepth={extrusionDepth}
      />
    </group>
  );
};

export default HexagonCell;
