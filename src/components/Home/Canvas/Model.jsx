/* eslint-disable react/no-unknown-property */


import  { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/banana.glb");
  const { actions } = useAnimations(animations, group);

  const scroll = useScroll()
  const tl = useRef()

  useFrame(() => {
    if(tl.current){
      tl.current.seek(scroll.offset * tl.current.duration());

    }
  })

  

  useGSAP(() => {
    tl.current = gsap.timeline({ defaults: {ease: 'power1.inOut' } });
  
    // //! Define the first animation
    tl.current.to(group.current.position, {
      x: 0,
      duration: 2,
   
    })

    tl.current.to(group.current.rotation, {
      y: 0.277,
      duration: 2,
      
    })

    tl.current.to(group.current.position, {
      onComplete: () => {
        // Play the animation after the first timeline completes
        if (actions["Emote Acrobatic Superhero"]) {
          // Play the animation
          actions["Emote Acrobatic Superhero"].play();
          
          setTimeout(() => {

            actions["Emote Acrobatic Superhero"].stop();
          },5000)
        }
      }
    })

  });


  useEffect(() =>{
    // actions["Emote Acrobatic Superhero"].play()
    // actions["Emote AfroHouse"].play()
    // actions["Emote Boogie Down"].play()
    // actions["Emote Boogie Down"].stop()
  },[actions])
  return (
    <group ref={group} {...props}  dispose={null}>
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
