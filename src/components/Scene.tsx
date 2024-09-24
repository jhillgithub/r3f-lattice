import Lattice from "./Lattice";
import Lights from "./Lights";

const Scene = () => {
  return (
    <>
      <Lights />
      <Lattice cellSize={0.2} />
    </>
  );
};

export default Scene;
