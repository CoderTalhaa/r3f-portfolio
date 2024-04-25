/* eslint-disable react/no-unknown-property */

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/banana.glb");
  const { actions } = useAnimations(animations, group);

  const scroll = useScroll();

  useEffect(
    () =>
      void (actions["Emote Acrobatic Superhero"].reset().play().paused = true),
    []
  );
  useFrame(
    () =>
      (actions["Emote Acrobatic Superhero"].time =
        actions["Emote Acrobatic Superhero"].getClip().duration *
        scroll.offset *
        0.5)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2.3, 0, 0]}
          scale={0.01}
        >
          <group
            name="3c11148441d0473db96a8436bd7d6f7ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="M_MED_Bananaao" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_142" rotation={[-Math.PI / 2, 0, 0]} />
                    <skinnedMesh
                      name="Object_143"
                      geometry={nodes.Object_143.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_143.skeleton}
                      castShadow
                    />
                  </group>
                </group>
                <group name="M_MED_Bananamo" rotation={[-Math.PI / 2, 0, 0]} />
                <group
                  name="Lamp"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_146" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_147" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[748.113, 534.367, 650.764]}
                  rotation={[Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_149" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/banana.glb");
