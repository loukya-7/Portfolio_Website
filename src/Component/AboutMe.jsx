import React from 'react';
import Girl from './images/girl.png';

const AboutMe = () => {
  return (
    <>
      <section
        style={{backgroundImage: "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 61) 100%)"}}
        className="flex flex-col lg:flex-row items-center justify-center w-full background-a "
      >
        <div className="Left-part lg:w-2/4 flex flex-col items-center mt-28 " >
          <div className="My-detail w-full lg:w-4/5 p-4 my-4">
            <h1 className="text-white text-4xl lg:text-6xl font-bold text-center my-3">
              About Me
            </h1>
            <h3 className="text-white text-xl lg:text-2xl font-serif text-center my-3"> Website Designer & Frontend developer</h3>
            <p className="text-white text-lg lg:text-xl text-center my-2">
              I'm Loukya, a passionate frontend developer with a knack for turning
              ideas into captivating online experiences.
            </p>
            <div className='border-2 border-white w-full lg:w-96 flex flex-wrap justify-between mx-auto my-4 p-2'>
                 <p className='text-white text-lg lg:text-xl'>Name:</p><p className='text-white text-lg lg:text-xl'>Loukya</p>
            </div>

            <div className='border-2 border-white w-full lg:w-96 flex flex-wrap justify-between mx-auto my-4 p-2'>
                 <p className='text-white text-lg lg:text-xl'>Email:</p><p className='text-white text-lg lg:text-xl'>chinthaloukya@gmail.com</p>
            </div>

            <div className='border-2 border-white w-full lg:w-96 flex flex-wrap justify-between mx-auto my-4 p-2'>
                 <p className='text-white text-lg lg:text-xl'>Phone no.:</p><p className='text-white text-lg lg:text-xl'>9014994308</p>
            </div>
          </div>
        </div>

        <div className="Right-part lg:w-2/4 me-7">
          <img src={Girl} className="w-full h-auto" alt="girl" />
        </div>
      </section>
    </>
  )
}

export default AboutMe;
