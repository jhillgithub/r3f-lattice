import { Cylinder, RoundedBox, Torus } from "@react-three/drei";
import { DoubleSide, MeshNormalMaterial } from "three";
import Lattice from "./Lattice";
import Lights from "./Lights";
import LatticeCell from "./LatticeCell";
import HexagonTile from "./HexagonTile";

const Scene = () => {
  return (
    <>
      <Lights />
      <HexagonTile />
      {/* <Lattice cellSize={0.2} CellComponent={LatticeCell}>
        <Torus>
          <meshStandardMaterial wireframe side={DoubleSide} />
        </Torus>
      </Lattice> */}
      {/* <Lattice
        cellSize={0.2}
        CellComponent={Cylinder}
        cellProps={{
          args: [0.55, 0.55, 1, 8],
          rotation: [Math.PI / 2, Math.PI / 8, 0],
          material: new MeshNormalMaterial(),
        }}
      >
        <Torus>
          <meshStandardMaterial wireframe side={DoubleSide} />
        </Torus>
      </Lattice> */}
    </>
  );
};

export default Scene;
