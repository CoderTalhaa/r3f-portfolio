import {
  Environment,
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Canvas/Experience";
import { Suspense } from "react";

function Webgl() {
  return (
    <div className="w-full h-screen absolute top-0 z-[]">
      <Canvas shadows>
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.2} />
        <Sparkles count={500} size={2} color={"E8C872"} scale={[30, 10, 10]} />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <Float
            speed={6}
            rotationIntensity={0.01}
            floatIntensity={0.2}
            floatingRange={[0.5, 0.1]}
          >
            <Experience />
          </Float>
        </Suspense>
        {/* <axesHelper /> */}
      </Canvas>
    </div>
  );
}

export default Webgl;
