import { useState, useEffect } from "react";
import basketballPlayer from "../assets/hero/basketball-player-action-sunset 1.png";
import africanWoman from "../assets/hero/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png";
import raceCar from "../assets/hero/fastaccelerating-race-car-formula-one-racing-amid-sunset-generative-ai 1.png";
import ball from "../assets/hero/basketball_sport_icon_in_minimalist_3d_render_2 1.png";

const HeroSection = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mobile view (small screens) and Medium view (tablets) - now they're identical
  if (screenSize === 'small' || screenSize === 'medium') {
    return (
      <section className="px-4 py-8">
        {/* Hero Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-black leading-tight font-sequel-sans tracking-tighter">
            <span className="text-gray-800">TOP SCORER TO THE</span>
            <br />
            <span className="text-gray-800">FINAL MATCH</span>
          </h2>
        </div>
        
        {/* Player Image with Background */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30">
            <img
              src={ball}
              alt="Basketball background"
              className="filter grayscale w-64"
            />
          </div>
          <img
            src={basketballPlayer}
            alt="Basketball player in action"
            className="relative z-10 max-w-full h-auto"
          />
        </div>
        
        {/* Description and Button */}
        <div className="text-center mb-8">
          <p className="text-md text-gray-800 mb-4">
            The EuroLeague Finals Top Scorer is the individual award for
            the player that gained the highest points in the EuroLeague
            Finals
          </p>
          <button className="bg-[#262626] text-lg text-white px-6 py-2 uppercase rounded-md">
            Continue Reading
          </button>
        </div>
        
        {/* Today's News */}
        <div className="mt-8">
          <div className="flex justify-center mb-4">
            <span className="bg-gray-200 text-gray-400 px-4 py-1 rounded-sm">
              Today
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First news item */}
            <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-md">
              <img
                src={africanWoman}
                alt="Runner"
                className="w-full h-78 object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 from-60% to-gray-100/0 to-100%">
                <div className="text-gray-500 mb-1 text-xs">
                  Race98 - 03 June 2023
                </div>
                <h2 className="text-sm text-gray-900 leading-tight">
                  Ethiopian runners took the top four spots.
                </h2>
              </div>
            </div>
            
            {/* Second news item */}
            <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-md">
              <img
                src={raceCar}
                alt="Race car"
                className="w-full h-78 object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 from-60% to-gray-100/0 to-100%">
                <div className="text-gray-500 mb-1 text-xs">• 01 Jun 2023</div>
                <h2 className="text-sm text-gray-900 leading-tight">
                  Indy Car Detroit: Dixon quickest in second practice
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Large screens - keep original exactly as is
  return (
    <section className="pt-12 pr-[115px] flex flex-row">
      {/* Left side - main content with circular background */}
      <div className="w-8/12 relative mb-8 md:mb-0">
        <div className="relative">
          {/* Ball background - moved this higher in the DOM for proper layering */}
          <div className="absolute left-0 bottom-[8%] z-0">
            <img
              src={ball}
              alt="Basketball background"
              className="filter grayscale"
              width={570}
            />
          </div>

          {/* Text overlaid on the circular background */}
          <div className="absolute top-10 pl-[115px] z-10 font-sequel-sans tracking-tighter ">
            <h2 className="text-7xl font-black leading-[1.0]">
              <span className="text-gray-800">TOP</span>
              <br />
              <span className="text-gray-800">SCORER TO</span>
              <br />
              <span className="text-gray-800">
                THE FINAL <br /> MATCH
              </span>
            </h2>
          </div>

          {/* Basketball player image */}
          <div className="relative left-[40%] z-20">
            <img
              width={575}
              src={basketballPlayer}
              alt="Basketball player in action"
            />
          </div>
        </div>

        {/* Description and button below the image */}
        <div className="w-fit mt-4 relative left-[65%] bottom-25 font-dm-sans">
          <p className="text-md text-gray-800 mb-4">
            The EuroLeague Finals Top Scorer is the <br /> individual award for
            the player that gained <br /> the highest points in the EuroLeague
            Finals
          </p>
          <button className="bg-[#262626] text-lg text-white px-6 py-2 uppercase rounded-md">
            Continue Reading
          </button>
        </div>
      </div>

      {/* Right side - news items */}
      <div className="w-4/12 pt-10 flex flex-col items-end font-pt-sans">
        {/* Today label */}
        <div className="space-y-6">
          <div className="mb-4">
            <span className="bg-gray-200 text-gray-400 px-4 py-1 rounded-sm">
              Today
            </span>
          </div>

          {/* First news item */}
          <div className="relative max-w-[230px] rounded-lg overflow-hidden bg-gray-200 shadow-md">
            {/* Runner image */}
            <div className="w-full">
              <img
                height={233}
                src={africanWoman}
                alt="Runner"
                className="object-cover rounded-md mb-2"
              />
            </div>

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 from-60% to-gray-100/0 to-100%">
              {/* Race info and date */}
              <div className="text-gray-500 mb-1 text-xs">
                Race98 - 03 June 2023
              </div>

              {/* Headline */}
              <h2 className="text-sm text-gray-900 leading-tight">
                Ethiopian runners took the top four spots.
              </h2>
            </div>
          </div>

          {/* Second news item */}
          <div className="relative max-w-[230px] rounded-lg overflow-hidden bg-gray-200 shadow-md">
            {/* Runner image */}
            <img
              height={233}
              src={raceCar}
              alt="Race car"
              className="object-cover rounded-md"
            />

            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 from-60% to-gray-100/0 to-100%">
              {/* Race info and date */}
              <div className="text-gray-500 mb-1 text-xs">• 01 Jun 2023</div>

              {/* Headline */}
              <h2 className="text-sm text-gray-900 leading-tight">
                Indy Car Detroit: Dixon quickest in second practice
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;