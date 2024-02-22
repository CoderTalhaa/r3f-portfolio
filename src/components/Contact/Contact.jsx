/* eslint-disable react/jsx-no-target-blank */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiAbstract096 } from "react-icons/gi";
function Contact() {

  function handleSubmit(e){
    toast("Thanks for submitting")
    e.preventDefault();
  }

  return (
    <div className="w-full h-full">
      <h1 className="flex items-center justify-center mt-9 mb-20 font-Anto text-white uppercase text-5xl">
        Contact
      </h1>

      <div className=" flex flex-col items-center lg:flex-row justify-between h-full m-auto p-[20px] relative max-w-[970px] ">
        {/* {LEFT} */}

        <form
        onSubmit={handleSubmit}
          id="contact-form"
          className=" w-[200px] lg:w-[400px]"
          role="form"
        >
          <div className="">
            <div className="">
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-transparent text-white "
                type="text"
                id="login"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="">
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-transparent text-white"
                type="text"
                id="login"
                placeholder="Email"
              />
            </div>
          </div>

          <textarea
            id="message"
            rows="6"
            className="block p-2.5 text-white w-full text-md bg-transparent rounded-lg border border-gray-300"
            placeholder="Leave a comment..."
          ></textarea>

          <button className=" mt-6 mb-12 border-2 border-[#3e3e3e] rounded-lg text-white px-8 py-3 text-base hover:border-[#fff] cursor-pointer transition ml-6">
            Submit
          </button>
        </form>

        {/* {RIght} */}

        <div className="text-white lg:text-2xl">
          <ul className="contact-list px-1 py-1  font-Ubanta">
            <li className="flex items-center gap-5 mb-2">
              <FaLocationDot />
              <span className="contact-text place">City, ISLAMABAD</span>
            </li>

            <li className="list-item">
              <i className="flex items-center gap-5 mb-2">
                <FaPhone />
                <span className="contact-text place">+92 3180054578</span>
              </i>
            </li>

            <li className="list-item">
              <i className="flex items-center gap-5 mb-3">
                <MdEmail />
                <span className="contact-text place">
                  {" "}
                  talhacust7@gmail.com
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="flex justify-evenly items-center mt-6 mb-6 text-xl lg:text-4xl">
            <li className="hover:text-red-300 hover:scale-150 transition-all duration-700 ">
              <a href="https://github.com/CoderTalhaa" target="_blank" className="contact-icon">
                <AiFillGithub />
              </a>
            </li>
            <li className="hover:text-red-300 hover:scale-150 transition-all duration-500">
              <a href="https://talha-hub.netlify.app/" target="_blank" className="contact-icon">
                <GiAbstract096 />
              </a>
            </li>
            <li className="hover:text-red-300 hover:scale-150 transition-all duration-700">
              <a href="https://twitter.com/home" target="_blank" className="contact-icon">
                <FaTwitter />
              </a>
            </li>
            <li className="hover:text-red-300 hover:scale-150 transition-all duration-700">
              <a href="https://www.instagram.com/7x.talha/" target="_blank" className="contact-icon">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <hr className="mb-6" />

          <div className="opacity-15">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
