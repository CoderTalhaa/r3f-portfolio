import { Environment, useGLTF, useTexture } from "@react-three/drei";
import { Black } from "./Black";

function World() {
  // const map = useTexture("/images/sky.jpg");
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <fog color="#161616" attach="fog" near={8} far={30} />

      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <Black position={[0, -1.5, 0]} />
      {/* <mesh>
        <sphereGeometry args={[5,64,64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh> */}
    </>
  );
}

export default World;
