import {
  Environment,
  Float,
  OrbitControls,
  
} from "@react-three/drei";
import { Icomore } from "./Icomore";
import Sphere from "./Sphere";

function Experience() {
  
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Icomore scale={0.9} />
      </Float>
      <Environment preset="studio" />
   
      <Sphere />
     
    
    </>
  );
}

export default Experience;
