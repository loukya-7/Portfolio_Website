import React from "react";
import "./Global.css";
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';
import project4 from './images/project-4.png';
import project5 from './images/project-5.png';





const Projects = () => {
  return (
    <div className="p-background">
      <div className="w-full Projects p-5 my-3 flex gap-20 justify-center flex-wrap">
        {/* Project 1 */}
        <div
          className="detail border-4 border-white w-80 h-120 p-2 boxShadow hover:scale-110 transition-all delay-105 mt-24"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={project1} alt="Project 1" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Shopping-Website
            </h1>
            <p className="text-white text-1xl text-center text-justify">
              Project focuses on creating a user-friendly shopping website frontend with seamless browsing and purchasing, prioritizing an intuitive add-to-cart functionality<br/>
              Tech used: React.js, Bootstrap
            </p>
            <div className="flex justify-between w-full">
              <button className="bg-blue-400 w-28 h-10 my-4 font-bold text-white">
                <a
                  href="https://github.com/loukya-7/Shopping_Website"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
              <button>
                <a
                  href="https://loukya-7.github.io/Shopping_Website/"
                  className="bg-blue-400 w-28 h-10 my-4 font-bold text-white hover:text-white inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="detail border-4 border-white w-80 h-120 p-2 boxShadow hover:scale-110 transition-all delay-100 mt-24"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={project2} alt="Project 2" />
          </div>

          <div className="Project-Detail flex flex-col items-center ">
            <h1 className="text-white text-2xl my-3 text-center ">
              Recipe-Finder
            </h1>
            <p className="text-white text-1xl text-center text-justify">
              Project aims to develop a recipe finder application with a primary focus on leveraging API integration to enhance user experience by providing access to a diverse range of recipes.<br/>
              Tech used: React.js, Tailwind.css
            </p>
            <div className="flex justify-between w-full">
              <button className="bg-blue-400 w-28 h-10 my-4 font-bold text-white">
                <a
                  href="https://github.com/loukya-7/Food_Finder"
                  className="hover:text-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
              <button>
                <a
                  href="https://loukya-7.github.io/Food_Finder/"
                  className="bg-blue-400 w-28 h-10 my-4 font-bold hover:text-blue inline-flex items-center justify-center text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="detail border-4 border-white w-80 h-102 p-2 boxShadow hover:scale-110 transition-all delay-100 mt-24"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={project3} alt="Project 3" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Food Website
            </h1>
            <p className="text-white text-1xl text-center text-justify">
            Food website project, flavor fiesta, we aim to unite culinary enthusiasts 
            with a diverse array of recipes and a dynamic community platform.<br/>
            Tech used:React.js,Tailwind.css
            </p>
            <div className="flex justify-between w-full ">
              <button className="bg-blue-400 w-28 h-10 my-4 font-bold flex justify-items-center items-center ml-14 mt-5">
                <a
                  href="https://github.com/loukya-7/Resturant_page"
                  className="hover:text-white text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
              
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div
          className="detail border-4 border-white w-80 h-102 p-2 boxShadow hover:scale-110 transition-all delay-105 mt-18"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={project4} alt="Project 4" />
          </div>

          <div className="Project-Detail flex flex-col items-center">
            <h1 className="text-white text-2xl my-3 text-center">
              Blinkit Clone
            </h1>
            <p className="text-white text-1xl text-center text-justify">
            The project, Blinkit Clone, is a real-time communication platform inspired by Blinkist, offering concise summaries 
            of non-fiction books to users on-the-go<br/>
            Tech used:Html5c,css3,Bootstrap
            </p>
            <div className="flex justify-between w-full">
              <button className="bg-blue-400 w-28 h-10 my-4 font-bold text-white">
                <a
                  href="https://github.com/loukya-7/blinkit_clone"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
              <button>
                <a
                  href="https://loukya-7.github.io/blinkit_clone/"
                  className="bg-blue-400 w-28 h-10 my-4 font-bold text-white hover:text-white inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div
          className="detail border-4 border-white w-80 h-120 p-2 boxShadow hover:scale-110 transition-all delay-100 mt-18"
          style={{
            backgroundImage:
              "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
        >
          <div className="Project-Image">
            <img src={project5} alt="Project 5" />
          </div>

          <div className="Project-Detail flex flex-col items-center ">
            <h1 className="text-white text-2xl my-3 text-center ">
              Project 5
            </h1>
            <p className="text-white text-1xl text-center text-justify">
            restaurant landing page project showcases the essence of our dining experience, inviting visitors with tantalizing imagery, 
            enticing menus, and seamless reservations<br/>
            Tech used:Html5,Css3
            </p>
            <div className="flex justify-between w-full">
              <button className="bg-blue-400 w-28 h-10 my-4 font-bold text-white">
                <a
                  href="https://github.com/loukya-7/Resturant-Website"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </button>
              <button>
                <a
                  href="https://loukya-7.github.io/Resturant-Website/"
                  className="bg-blue-400 w-28 h-10 my-4 font-bold text-white hover:text-white inline-flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        
       
            
          

      </div>
    </div>
  );
};

export default Projects;
