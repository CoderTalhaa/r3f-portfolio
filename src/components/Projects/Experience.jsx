import {
  ContactShadows,
  Environment,
  Float,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";
import { Icomore } from "./Icomore";
import Sphere from "./Sphere";
import { useState } from "react";
import Portal from "./Portal/Portal";

function Experience() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      <Float floatIntensity={2} speed={3}>
        <Icomore scale={0.9} />
      </Float>
        <ContactShadows
          opacity={1}
          scale={40}
          blur={1}
          far={10}
          resolution={256}
          color="#ffffff"
          position={[0, -2, 0]}
        />
      <Environment preset="studio" />

      <RoundedBox
        args={[0.7, 0.7, 0.1]}
        onDoubleClick={() => setActive(active === true ? null : true)}
      >
        <MeshPortalMaterial blend={active === true ? 1 : 0}>
          <Portal />
        </MeshPortalMaterial>
      </RoundedBox>
      <Sphere />
    </>
  );
}

export default Experience;
