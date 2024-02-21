import { BsFillMoonStarsFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import baffle from "baffle";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoDiscord } from "react-icons/io5";
import Skills from "../../About/Skills";
import Contact from "../../Contact/Contact";
import logo from "/images/talha.png"

function Overlay() {
  useEffect(() => {
    const target = baffle("#title");
    target.set({
      characters: "░P░h░a░n░t░o░m░",
      speed: 100,
    });
    target.start();
    target.reveal(3000, 3000);
  }, []);

  return (
    <div className="">
      <main className="px-10 text-primary">
        <section className=" h-screen">
          <nav className="py-10 mb-16 flex justify-between ">
            <img
              className="h-20 object-cover transition ease-in duration-200 hover:scale-150 "
              src={logo}
              alt=""
            />
            <ul className="flex items-center">
              <li>
                {" "}
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />{" "}
              </li>
            </ul>
          </nav>
          <div className="pt-6">
            <h1 id="title" className="text-5xl mb-6 font-Anto">
              M.TALHA
            </h1>
            <h3 className="font-Ubanta text-xl mb-3">
              <TypeAnimation
                sequence={[
                  "FrontEnd Developer",
                  1000,
                  "Web Designer",
                  1000,
                  "3D Artists",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h3>
            <p className="font-thin text-lg mb-6 lg:max-w-[35%]">
              Im Talha an enthusiastic developer in Threejs, WebGL, and WebXR
              development. As a Computer Science student, Ive been creating
              various experiences in web technology including AR and VR.
              Expertise: Threejs A-Frame React GSAP JavaScript Webflow.
            </p>
            <div className="text-3xl flex items-center gap-6 mb-20">
              <a href="https://www.linkedin.com/in/talha-83984xb/" target="_blank" rel="noopener noreferrer">
                
              <FaLinkedin className="hover:text-teal-400 hover:cursor-pointer" />
              </a>
              <a href="https://discord.gg/TCcGNX4j" target="_blank" rel="noopener noreferrer">

              <IoLogoDiscord className="hover:text-teal-400 hover:cursor-pointer" />
              </a>
              <a href="https://github.com/CoderTalhaa" target="_blank" rel="noopener noreferrer">

              <IoLogoGithub className="hover:text-teal-400 hover:cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-white"></div>
        </section>
      </main>
      <Skills />
      <Contact />
    </div>
  );
}

export default Overlay;
