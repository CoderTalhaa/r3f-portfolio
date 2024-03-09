import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { Loader, ScrollControls } from "@react-three/drei"
import { Suspense } from "react"

function Projects() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{position:[0,0,5], fov:30}}>
        <color attach="background" args={["#151616"]} />
        <ScrollControls pages={4}>
          <Suspense fallback={null}>
        <Experience />
          </Suspense>
        </ScrollControls>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Projects
