import {
  Environment,
  Float,
  RenderTexture,
  RoundedBox,
  Sparkles,
  Stars,
  Text,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Color } from "three";

function Sphere() {
  const textColor = new Color("#fff");
  textColor.multiplyScalar(6);

  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.3} />
      </EffectComposer>

      <RoundedBox args={[0.8, 0.8, 0.1]} position={[0, 0, -0.1]}>
        <Sparkles count={10} scale={0.6} size={2} speed={0.4} color="purple" />
        <meshBasicMaterial color={[1.5 * 5, 1 * 5, 4 * 5]} toneMapped={false} />
      </RoundedBox>
      <Text
      position={[0,1.3,0]}
      scale={0.38}
        font="fonts/Philosopher-Bold.ttf"
        anchorX="center"
        anchorY="center"
      >
        SCROLL
        <meshBasicMaterial color={textColor} toneMapped={false}>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#ff2312"]} />
            <Environment preset="city" />
            <Float floatIntensity={4} rotationIntensity={3}>
              <Stars
                radius={100}
                depth={10}
                count={5000}
                factor={10}
                saturation={0}
                fade
                speed={0}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
    </>
  );
}

export default Sphere;
