/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/black.glb -o src/components/Human.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Human(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/black.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model">
          <group name="489dbd949f094282bdbda3e41787539ffbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="BH_Body" />
                <group name="BlackHat_Armature">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_87" />
                    <group name="Object_88" />
                    <group name="Object_89" />
                    <group name="Object_90" />
                    <skinnedMesh name="0" geometry={nodes['0'].geometry} material={materials.BlackHat} skeleton={nodes['0'].skeleton} />
                    <skinnedMesh name="1" geometry={nodes['1'].geometry} material={materials.Eyebrows} skeleton={nodes['1'].skeleton} />
                    <skinnedMesh name="2" geometry={nodes['2'].geometry} material={materials.Monocle} skeleton={nodes['2'].skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/black.glb')
