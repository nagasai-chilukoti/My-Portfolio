// import { useState } from 'react';
import Globe from 'react-globe.gl';
// import Button from '../components/Button.jsx';

const About = () => {
  // const [hasCopied, setHasCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText('nagasaichilukoti71@gmail.com');
  //   setHasCopied(true);

  //   setTimeout(() => {
  //     setHasCopied(false);
  //   }, 2000);
  // };

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
        <h3 className="grid-headtext text-2xl font-semibold text-white">Tech Stack</h3>
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

    {/* Fourth Section */}
    {/* <div className="flex flex-col items-center w-full">
      <img
        src="assets/grid3.png"
        alt="grid-3"
        className="w-full sm:h-[266px] h-fit object-contain rounded-xl"
      />
      <div className="text-center mt-6">
        <p className="grid-headtext text-2xl font-semibold text-white">My Passion for Coding</p>
      </div>
    </div> */}

    {/* Fifth Section */}
    {/* <div className="flex flex-col items-center w-full xl:col-span-2">
      <img
        src="assets/grid4.png"
        alt="grid-4"
        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top rounded-xl"
      />
      <div className="space-y-2 text-center mt-6">
        <p className="grid-subtext text-lg font-medium text-gray-400">Contact me</p>
        <div className="copy-container flex items-center justify-center cursor-pointer" onClick={handleCopy}>
          <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="mr-2" />
          <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
            nagasaichilukoti71@gmail.com
          </p>
        </div>
      </div>
    </div> */}
  
</section>

  );
};

export default About;
