import { Box } from "@react-three/drei";
import Lights from "./Lights";

const Scene = () => {
  return (
    <>
      <Lights />
      <Box>
        <meshNormalMaterial />
      </Box>
    </>
  );
};

export default Scene;
