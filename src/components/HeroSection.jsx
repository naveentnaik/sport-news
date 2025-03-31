import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import basketballPlayer from "../assets/hero/basketball-player-action-sunset 1.png";
import africanWoman from "../assets/hero/beautiful-young-african-woman-sports-clothing-running-against-gray-background 1.png";
import raceCar from "../assets/hero/fastaccelerating-race-car-formula-one-racing-amid-sunset-generative-ai 1.png";
import ball from "../assets/hero/basketball_sport_icon_in_minimalist_3d_render_2 1.png";

const HeroSection = () => {
  const { t } = useTranslation();
  const [screenSize, setScreenSize] = useState("large");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("small");
      } else if (window.innerWidth < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Set isLoaded to true after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mobile view (small screens) and Medium view (tablets) - now they're identical
  if (screenSize === "small" || screenSize === "medium") {
    return (
      <section className="px-4 py-8">
        {/* Hero Title with animation */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-black leading-tight font-sequel-sans tracking-tighter">
            <span
              className={`inline-block text-gray-800 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              {t("hero.title.line1")}
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 delay-300 relative ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Gradient mask layer that applies to the text */}
              <span
                className="absolute inset-0 bg-gradient-to-t from-white via-gray-400 to-gray-800 bg-clip-text text-transparent opacity-90"
                style={{ WebkitBackgroundClip: "text" }}
              >
                {t("hero.title.line2")}
              </span>

              {/* Base text layer (somewhat visible underneath for better gradient effect) */}
              <span className="text-gray-800 opacity-30">
                {t("hero.title.line2")}
              </span>
            </span>
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
            className="relative z-10 max-w-full h-auto animate-float"
            style={{
              animation: "float 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Description and Button */}
        <div className="text-center mb-8">
          <p className="text-md text-gray-800 mb-4">{t("hero.description")}</p>
          <button className="bg-[#262626] text-lg text-white px-6 py-2 uppercase rounded-md">
            {t("hero.button")}
          </button>
        </div>

        {/* Today's News */}
        <div className="mt-8">
          <div className="flex justify-center mb-4">
            <span className="bg-gray-200 text-gray-400 px-4 py-1 rounded-sm">
              {t("hero.today")}
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
                  {t("hero.news.first.source")}
                </div>
                <h2 className="text-sm text-gray-900 leading-tight">
                  {t("hero.news.first.headline")}
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
                <div className="text-gray-500 mb-1 text-xs">
                  {t("hero.news.second.source")}
                </div>
                <h2 className="text-sm text-gray-900 leading-tight">
                  {t("hero.news.second.headline")}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Add the keyframes for the floating animation */}
        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
              filter: brightness(1);
            }
            50% {
              transform: translateY(-10px);
              filter: brightness(1.1);
            }
            100% {
              transform: translateY(0px);
              filter: brightness(1);
            }
          }
        `}</style>
      </section>
    );
  }

  // Large screens - keep original layout but add title animation
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

          {/* Text overlaid on the circular background with animation */}
          <div className="absolute top-10 pl-[115px] z-10 font-sequel-sans tracking-tighter">
            <h2 className="text-7xl font-black leading-[1.0]">
              <span
                className={`inline-block text-gray-800 transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
              >
                {t("hero.title.desktop.line1")}
              </span>
              <br />
              <span
                className={`inline-block text-gray-800 transition-all duration-700 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
              >
                {t("hero.title.desktop.line2")}
              </span>
              <br />
              <span
                className={`inline-block text-gray-800 transition-all duration-700 delay-400 ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
              >
                {t("hero.title.desktop.line3")}
              </span>
              <br />
              <span
                className={`inline-block transition-all duration-700 delay-600 relative ${
                  isLoaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"
                }`}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-t from-white via-gray-400 to-gray-800 bg-clip-text text-transparent opacity-90"
                  style={{ WebkitBackgroundClip: "text" }}
                >
                  {t("hero.title.desktop.line4")}
                </span>

                <span className="text-gray-800 opacity-30">
                  {t("hero.title.desktop.line4")}
                </span>
              </span>
            </h2>
          </div>

          {/* Basketball player image */}
          <div className="relative left-[40%] z-20">
            <img
              width={575}
              src={basketballPlayer}
              alt="Basketball player in action"
              style={{
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        {/* Description and button below the image */}
        <div className="w-fit mt-4 relative left-[65%] bottom-25 font-dm-sans">
          <p className="text-md text-gray-800 mb-4 max-w-[330px]">
            {t("hero.description")}
          </p>
          <button className="bg-[#262626] text-lg text-white px-6 py-2 uppercase rounded-md">
            {t("hero.button")}
          </button>
        </div>
      </div>

      {/* Right side - news items */}
      <div className="w-4/12 pt-10 flex flex-col items-end font-pt-sans">
        {/* Today label */}
        <div className="space-y-6">
          <div className="mb-4">
            <span className="bg-gray-200 text-gray-400 px-4 py-1 rounded-sm">
              {t("hero.today")}
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
                {t("hero.news.first.source")}
              </div>

              {/* Headline */}
              <h2 className="text-sm text-gray-900 leading-tight">
                {t("hero.news.first.headline")}
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
              <div className="text-gray-500 mb-1 text-xs">
                {t("hero.news.second.source")}
              </div>

              {/* Headline */}
              <h2 className="text-sm text-gray-900 leading-tight">
                {t("hero.news.second.headline")}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Add the keyframes for the floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            filter: brightness(1);
          }
          50% {
            transform: translateY(-10px);
            filter: brightness(1.1);
          }
          100% {
            transform: translateY(0px);
            filter: brightness(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
