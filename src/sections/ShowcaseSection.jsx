import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="w-full flex justify-center mb-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 shadow-lg text-center max-w-2xl w-full">
              <h2 className="text-4xl font-extrabold text-white tracking-wider mb-2 drop-shadow">
                🚀 My Projects
              </h2>
            </div>
          </div>

          {/* Updated grid layout with two projects per row */}
          <div className="project-list-wrapper grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB] rounded-lg overflow-hidden border-2 border-white/20 h-64">
                <a
                  href="https://iristumordetection.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/project-1.png"
                    alt="Iris Tumor Detection Model"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <h2 className="text-xl font-semibold text-white mt-4">Iris Tumor Detection App</h2>
              <a
                href="https://iristumordetection.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2 inline-block hover:underline"
              >
                Check Live Site
              </a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB] rounded-lg overflow-hidden border-2 border-white/20 h-64">
                <a
                  href="https://ticket-booking-ochre.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/project-2.png"
                    alt="YC Directory App"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <h2 className="text-xl font-semibold text-white mt-4">Movie Ticket Booking System</h2>
              <a
                href="https://ticket-booking-ochre.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2 inline-block hover:underline"
              >
                Check Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
