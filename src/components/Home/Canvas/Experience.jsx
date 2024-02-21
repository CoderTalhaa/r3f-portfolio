import { Scroll, ScrollControls } from "@react-three/drei";
import { Model } from "./Model";
import Overlay from "./Overlay";
import { useEffect, useState } from "react";

function Experience() {
  const [xPosition, setXPosition] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust xPosition based on screen size
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Adjust this breakpoint according to your design
        setXPosition(1);
      } else {
        setXPosition(4);
      }
    };

    handleResize(); // Call it once to set initial position

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ScrollControls pages={3} damping={0.1}>
        <Model
          key={xPosition}
          scale={2}
          position={[xPosition, -2, 0]}
          rotation={[0, -0.2, 0]}
        />

        <Scroll html style={{ width: "100%" }}>
          <Overlay />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default Experience;
