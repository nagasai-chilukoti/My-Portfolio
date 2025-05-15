// import { useState } from 'react';
import Globe from 'react-globe.gl';
// import Button from '../components/Button.jsx';

const About = () => {


  return (
   <section className="c-space my-20" id="about">
    <h1>About Me</h1>
  <div class='parent'>
    {/* First Section */}
    <div class='child' >
  <img
    src="assets/grid1.png"
    alt="grid-1"
    className="w-full sm:h-[276px] h-fit object-contain rounded-xl"
  />
  <div className="text-center mt-6">
    <h3 className="grid-headtext text-2xl font-semibold text-white">Hi, I’m Naga Sai Chilukoti</h3>
  </div>
</div>


    {/* Second Section */}
    <div class='child'>
      <img
        src="assets/grid2.png"
        alt="grid-2"
        className="w-full sm:h-[276px] h-fit object-contain rounded-xl"
      />
      <div className="text-center mt-6">
        <h3 className="grid-headtext text-2xl font-semibold text-white">My Tech Stack</h3>
      </div>
    </div>
    

    {/* Third Section */}
    <div align='center'>
      <div className="w-full rounded-3xl sm:h-[326px] h-fit flex justify-center items-center">
        <Globe
          height={250}
          width={250}
          backgroundColor="rgba(0, 0, 0, 0)"
          backgroundImageOpacity={0.5}
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
        />
        <h4>I’m very flexible with time zone communications & locations</h4>
      </div>
      
    </div>
    </div>
  
</section>

  );
};

export default About;
