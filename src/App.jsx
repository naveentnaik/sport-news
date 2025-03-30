import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import { News } from "./components/News";
import FeatureSlider from "./components/FeatureSlider";
import RecentNews from "./components/RecentNews";
import ClubRankings from "./components/ClubRankings";

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(1);
  const totalSlides = 4;

  const handleNext = (setter) => {
    setter((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const handlePrev = (setter) => {
    setter((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const goToSlide = (setter, slideNumber) => {
    setter(slideNumber);
  };

  return (
    <div className="bg-[#F9FAFC]">
      <Navbar />

      <main className="container mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Categories Section */}
        <CategoriesSection />

        {/* Trending News Section */}
        <News />

        {/* Feature News Slider */}
        <FeatureSlider />

        {/* Recent News and Clubs Ranking */}
        <section className="md:px-[115px] pt-8 pb-6 flex justify-between gap-6">
          <div className="w-1/2 flex-1">
            <RecentNews />
          </div>

          {/* Clubs Ranking */}
          <div className="w-1/2 flex-1">
            <ClubRankings />
          </div>
        </section>

        {/* Sports Articles */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6">Sports Article</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div>
              <div className="relative mb-4">
                <div className="w-full h-40 bg-gray-300"></div>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
                  Basketball
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Alex Will</span>
              </div>

              <h4 className="font-bold text-lg mb-2">
                5 Exercises Basketball Players Should Be Using To Develop
                Strength
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                This article was written by Alex Williams from Henderson Junior
                College, a basketball guru of sorts who trains elite players.
              </p>

              <button className="bg-black text-white px-4 py-1 text-sm">
                Read More
              </button>
            </div>

            {/* Article 2 */}
            <div>
              <div className="relative mb-4">
                <div className="w-full h-40 bg-gray-300"></div>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
                  Hockey
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Paul James</span>
              </div>

              <h4 className="font-bold text-lg mb-2">
                Golden Knights not to fulfill owner's quest to win Stanley Cup
                in fifth year
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                The Vegas Golden Knights will play the Florida Panthers in the
                Stanley Cup Final beginning Saturday.
              </p>

              <button className="bg-black text-white px-4 py-1 text-sm">
                Read More
              </button>
            </div>

            {/* Article 3 */}
            <div>
              <div className="relative mb-4">
                <div className="w-full h-40 bg-gray-300"></div>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
                  Badminton
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Emily Landis</span>
              </div>

              <h4 className="font-bold text-lg mb-2">
                'Outdoor' Badminton Gets Support From Local Federation
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                The Badminton World Federation is developing Air Badminton and
                the country's governing body is backing the outdoor variant.
              </p>

              <button className="bg-black text-white px-4 py-1 text-sm">
                Read More
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-10 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">
            NEWSLETTER SUBSCRIPTION
          </h3>

          <div className="flex">
            <input
              type="email"
              placeholder="johndoe123455@gmail.com"
              className="px-4 py-2 w-full"
            />
            <button className="bg-black text-white px-4 py-2 flex-shrink-0">
              <span>&rarr;</span>
            </button>
          </div>
        </section>

        {/* Social Media and Footer Navigation */}
        <section className="mb-10 flex justify-between">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">
              f
            </div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">
              ig
            </div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">
              tw
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center">
            <button
              onClick={() => handlePrev(setCurrentNewsSlide)}
              className="w-8 h-8 flex items-center justify-center bg-gray-300 mr-2"
            >
              &lt;
            </button>

            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => goToSlide(setCurrentNewsSlide, num)}
                className={`w-6 h-6 mx-1 flex items-center justify-center ${
                  currentNewsSlide === num
                    ? "bg-gray-800 text-white"
                    : "bg-gray-300"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handleNext(setCurrentNewsSlide)}
              className="w-8 h-8 flex items-center justify-center bg-gray-300 ml-2"
            >
              &gt;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
