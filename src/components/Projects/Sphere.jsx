import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React from 'react'

function Sphere() {
  return (
    <>
      <EffectComposer>
            <Bloom  mipmapBlur />
      </EffectComposer>

      <mesh scale={0.2}>
        <sphereGeometry />
        <meshBasicMaterial color={[1.5*10,1*10,4*10]} toneMapped={false} />
      </mesh>
    </>
  )
}

export default Sphere
