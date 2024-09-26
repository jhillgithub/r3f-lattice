import { Canvas as R3fCanvas } from "@react-three/fiber";
import Controls from "./Controls";
import Scene from "./Scene";
import { OrthographicCamera } from "@react-three/drei";

const Canvas = () => {
  return (
    <R3fCanvas>
      <OrthographicCamera makeDefault position={[1, 1, 1]} zoom={100} />

      <color attach="background" args={["#0f0f0f"]} />
      <Scene />
      <Controls />
    </R3fCanvas>
  );
};

export default Canvas;
