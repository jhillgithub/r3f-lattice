import { useMemo } from "react";
import { Shape } from "three";

export const useHexagonTileShape = (
  tileWidth: number,
  tileHeight: number,
  hexagonRadius: number
) => {
  return useMemo(() => {
    const tileShape = new Shape();

    tileShape.moveTo(-tileWidth / 2, -tileHeight / 2);
    tileShape.lineTo(tileWidth / 2, -tileHeight / 2);
    tileShape.lineTo(tileWidth / 2, tileHeight / 2);
    tileShape.lineTo(-tileWidth / 2, tileHeight / 2);
    tileShape.lineTo(-tileWidth / 2, -tileHeight / 2);

    const hexagon = new Shape();
    const hexagonSides = 6;
    const angleStep = (Math.PI * 2) / hexagonSides;

    for (let i = 0; i <= hexagonSides; i++) {
      const x = hexagonRadius * Math.cos(i * angleStep);
      const y = hexagonRadius * Math.sin(i * angleStep);
      if (i === 0) {
        hexagon.moveTo(x, y);
      } else {
        hexagon.lineTo(x, y);
      }
    }

    tileShape.holes.push(hexagon);

    return tileShape;
  }, [tileWidth, tileHeight, hexagonRadius]);
};
