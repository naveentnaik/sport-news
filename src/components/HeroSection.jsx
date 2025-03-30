import basketballPlayer from "../assets/hero/basketball-player-action-sunset 1.png";
import africanWoman from "../assets/hero/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png";
import raceCar from "../assets/hero/fastaccelerating-race-car-formula-one-racing-amid-sunset-generative-ai 1.png";
import ball from "../assets/hero/basketball_sport_icon_in_minimalist_3d_render_2 1.png";

const HeroSection = () => {
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
              <h2 className="text-sm  text-gray-900 leading-tight">
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
              <h2 className="text-sm  text-gray-900 leading-tight">
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
