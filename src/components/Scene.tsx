import { RoundedBox, Torus } from "@react-three/drei";
import { DoubleSide, MeshNormalMaterial } from "three";
import Lattice from "./Lattice";
import Lights from "./Lights";

const Scene = () => {
  return (
    <>
      <Lights />
      {/* <Lattice cellSize={0.2} CellComponent={LatticeCell}>
        <Torus>
          <meshStandardMaterial wireframe side={DoubleSide} />
        </Torus>
      </Lattice> */}
      <Lattice
        cellSize={0.2}
        CellComponent={RoundedBox}
        cellProps={{
          args: [1, 1, 1],
          radius: 0.8,
          material: new MeshNormalMaterial(),
        }}
      >
        <Torus>
          <meshStandardMaterial wireframe side={DoubleSide} />
        </Torus>
      </Lattice>
    </>
  );
};

export default Scene;
