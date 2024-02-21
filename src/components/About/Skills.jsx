import { motion } from "framer-motion";
import { useRef } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { SiAframe } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

function Skills() {
  const ref = useRef();

  const skills = [
    {
      name: "Javascript",
      img: <RiJavascriptFill />,
      color: "yellow",
    },
    {
      name: "HTML5",
      img: <FaHtml5 />,
      color: "red",
    },
    {
      name: "CSS3",
      img: <IoLogoCss3 />,
      color: "#1640D6",
    },
    {
      name: "React",
      img: <FaReact />,
      color: "#0C359E",
    },
    {
      name: "Tailwind",
      img: <SiTailwindcss />,
      color: "#0B60B0",
    },
    {
      name: "Framer-Motion",
      img: <TbBrandFramerMotion />,
      color: "#860A35",
    },
    {
      name: "Threejs",
      img: <TbBrandThreejs />,
      color: "#FEFAE0",
    },
    {
      name: "Aframe",
      img: <SiAframe />,
      color: "#B31312",
    },
    {
      name: "Blender",
      img: <SiBlender />,
      color: "#FB8B24",
    },
    {
      name: "C#",
      img: <SiCsharp />,
      color: "#720455",
    },
  ];

  return (
    <div className=" relative w-full h-screen  overflow-hidden  ">
      {/* { BackGround } */}
      <div className=" relative z-[-2] w-full h-screen">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-300 font-serif select-none ">
          SKILLS.
        </h1>
      </div>
      <div
        ref={ref}
        className=" absolute top-[10%] left-0 z-[9] w-full h-[800px] flex gap-7 flex-wrap lg:px-6 lg:py-28  sm:p-3 "
      >
        {/* { Card } */}
        {skills.map((l, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={ref}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.5}
            className="relative w-60 h-auto rounded-[40px] bg-zinc-900/90  px-3 py-3 lg:py-0   overflow-hidden flex flex-col items-center justify-center gap-6 cursor-move"
            style={{ color: l.color }}
          >
            <div className="text-5xl">{l.img}</div>
            <h1 className="text-4xl font-Anto  bg-gradient-to-t from-pink-500  via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {l.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
