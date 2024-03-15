import React from "react";
import "./Global.css";
import javaImage from './images/java.png'; 
import Bootstrap from './images/bootstrap.png';
import python from './images/python.png';

const Skills = () => {
  return (
    
       
        
      <div className="skills-background">
      <div className="Skills p-3 flex justify-center items-center my-4  p-1">
        <div className="skills-Text-part w-4/5 p-3 rounded-lg flex flex-col items-center boxShadow mt-28">
          <h1 className="text-4xl text-white font-bold text-center">My Skills</h1>
          <p className="text-white text-xl text-center my-5 font-bold">
            "Proficient in HTML, CSS, and JavaScript, I design and develop captivating web interfaces with seamless functionality. Leveraging Tailwind CSS, I bring modern, 
              responsive designs to life, ensuring a polished and user-friendly experience."
          </p>

          <div className="skills-Ui flex gap-8 my-5 flex-wrap justify-center items-center ">
            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src="https://clipground.com/images/html-logo-png-3.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">HTML</h1>
            </div>

            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src="https://logospng.org/download/css-3/logo-css-3-2048.png"
                className="w-16"
              />
              <h1 className="text-white font-bold text-xl">CSS</h1>
            </div>

            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src="https://logosdownload.com/logo/javascript-logo-big.png"
                className="w-12"
              />
              <h1 className="text-white font-bold text-xl">JavaScript</h1>
            </div>

            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src="https://logodix.com/logo/1658364.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">React.js</h1>
            </div>

            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
                className="w-24"
              />
              <h1 className="text-white font-bold text-xl">Tailwind CSS</h1>
            </div>
            
            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src={javaImage}
                className="w-20"
              />
              <h1 className="text-white font-bold text-xl">Java</h1>
            </div>
            
            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src={Bootstrap}
                className="w-20"
              />
              <h1 className="text-white font-bold text-xl">Bootstrap</h1>
            </div>
            
            <div className="border-2 boxShadow border-blue-600 w-60 h-28 rounded-lg flex flex-col items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all delay-100">
              <img
                src={python}
                className="w-20"
              />
              <h1 className="text-white font-bold text-xl">Python</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Skills;
