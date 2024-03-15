import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Girl from './images/girl.png';

const HeroSection = () => {
 
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1QKX_nGdvSv1u6J_qSOUIbdKbtWBYjVxM/view?usp=sharing'; 
    link.download = 'LoukyaResume.pdf'; 
    link.click();
  };

  return (
    <>
      <section
        style={{
          backgroundImage:
            "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 61) 100%)",
        }}
        className="h-screen flex items-center lg:flex-nowrap sm:flex-wrap pt-7"
      >
        
        <div className="Left-part flex flex-col lg:w-2/4 items-center">
          <div className="Social-links  gap-3 flex   w-1/2 sm:w-3/4">
            <div className="Instagram border-2 border-blue-800 w-12 h-12 flex items-center justify-center rounded-full mt-24">
              <a href="https://github.com/loukya-7">
                <FaGithub className="text-2xl text-white hover:scale-110" />
              </a>
            </div>
            <div className="Github border-2 border-blue-800 w-12 h-12 flex items-center justify-center rounded-full mt-24">
              <a href="https://www.linkedin.com/in/loukya-chintha-5727bb20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className="text-2xl text-white hover:scale-110" />
              </a>
            </div>
          </div>
        
          <div className="My-detail w-full sm:w-4/5 p-2 my-2 mt-7">
            <h4 className="text-white text-3xl font-serif ">Hello!</h4>
            <h1 className="text-white text-4xl sm:text-6xl font-bold text-nowrap my-3">
              <span className="typing">I</span><span className="typing">'</span><span className="typing">m</span> <span className="typing">L</span><span className="typing">o</span><span className="typing">u</span><span className="typing">k</span><span className="typing">y</span><span className="typing">a</span>
            </h1>
            <h3 className="text-white text-2xl font-serif my-3">
              Website Designer & Frontend developer
            </h3>
            <p className="text-white my-2 text-2xl">
              I'M Loukya, a passionate Frontend developer with a knack for turning
              ideas into captivating online experiences.
            </p>
            


            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full mt-4 ml-24" onClick={handleDownload}>
              <FaFileDownload className="inline-block mr-3" /> Download Resume
            </button>



          </div>
        </div>

        <div className="Right-part hidden lg:block lg:w-2/4 me-7">
        <img src={Girl} alt="developer" />

        </div>
      </section>
    </>
  );
};

export default HeroSection;
