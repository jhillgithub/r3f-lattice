import Lights from "./Lights";
import LatticeCell from "./LatticeCell";
import { degToRad } from "three/src/math/MathUtils.js";

const Scene = () => {
  return (
    <>
      <Lights />
      <LatticeCell
        position={[0, 0, 0]}
        rotation={[0, degToRad(30), 0]}
        size={1}
      />
    </>
  );
};

export default Scene;
