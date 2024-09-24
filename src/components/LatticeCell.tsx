import { Segment, Segments } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";

type LatticeProps = { size: number } & GroupProps;

const LatticeCell = ({ size, ...groupProps }: LatticeProps) => {
  const corners = useMemo(() => {
    const halfSize = size / 2;

    return [
      new Vector3(-halfSize, -halfSize, -halfSize),
      new Vector3(halfSize, -halfSize, -halfSize),
      new Vector3(halfSize, halfSize, -halfSize),
      new Vector3(-halfSize, halfSize, -halfSize),
      new Vector3(-halfSize, -halfSize, halfSize),
      new Vector3(halfSize, -halfSize, halfSize),
      new Vector3(halfSize, halfSize, halfSize),
      new Vector3(-halfSize, halfSize, halfSize),
    ];
  }, [size]);

  return (
    <group {...groupProps}>
      <Segments limit={8} lineWidth={1.0}>
        {corners &&
          corners.map((corner) => (
            <Segment start={[0, 0, 0]} end={corner} color="hotpink" />
          ))}
      </Segments>
    </group>
  );
};

export default LatticeCell;
