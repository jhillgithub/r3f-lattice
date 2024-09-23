import { Canvas as R3fCanvas } from "@react-three/fiber";
import Controls from "./Controls";
import Scene from "./Scene";

const Canvas = () => {
  return (
    <R3fCanvas>
      <color attach="background" args={["#0f0f0f"]} />
      <Scene />
      <Controls />
    </R3fCanvas>
  );
};

export default Canvas;
