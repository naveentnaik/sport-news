import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(1);
  const totalSlides = 4;

  const handleNext = (setter) => {
    setter(prev => prev === totalSlides ? 1 : prev + 1);
  };

  const handlePrev = (setter) => {
    setter(prev => prev === 1 ? totalSlides : prev - 1);
  };

  const goToSlide = (setter, slideNumber) => {
    setter(slideNumber);
  };

  return (
    <div className="bg-[#F9FAFC]">
        <Navbar/>

      <main className="container mx-auto">
        {/* Hero Section */}
        <HeroSection/>

        {/* Categories Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6">Category</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Football */}
            <div className="relative">
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="absolute top-4 left-4 text-white font-bold text-xl">
                FOOTBALL
              </div>
            </div>
            
            {/* Basketball */}
            <div className="relative">
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                BASKET BALL
              </div>
            </div>
            
            {/* Car Sport */}
            <div className="relative">
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="absolute top-4 left-4 text-white font-bold text-xl">
                CAR SPORT
              </div>
            </div>
            
            {/* Table Tennis */}
            <div className="relative">
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                TABLE TENNIS
              </div>
            </div>
          </div>
        </section>

        {/* Trending News Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6">Trending News</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Left Column - News Articles */}
            <div className="md:col-span-3 space-y-6">
              {/* Article 1 */}
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Arthur Of House Wins at Belmont Park After Race Injury</h4>
                  <p className="text-xs text-gray-600">After falling to a near-fatal injury three years prior at the same track, Arthur of House will now be given a season's rest.</p>
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Sandra Burke Enhances Longer Season With World Cup</h4>
                  <p className="text-xs text-gray-600">Last year, Sandra Burke was a strong competitor in the World Cup, but this time she's at the top rankings, adding to her achievements.</p>
                </div>
              </div>
              
              {/* Article 3 */}
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold mb-1">Ryan Garcia is fighting again, this time on social media</h4>
                  <p className="text-xs text-gray-600">Boxing has Ryan Garcia and his promoters worried about his social media presence as fights are being cancelled due to claims of hacked accounts.</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Cycling Membership Ad */}
            <div className="md:col-span-2 relative">
              <div className="w-full h-full min-h-64 bg-gray-300"></div>
              <div className="absolute top-4 left-4 text-white">
                <span className="bg-black text-white text-xs px-2 py-1">Cycling</span>
                <div className="mt-40 md:mt-48">
                  <p className="text-xs">Join Us: July 2023</p>
                  <h4 className="text-2xl font-bold mt-2">DISCOVER THE MEMBER BENEFITS OF USA CYCLING!</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature News Slider */}
        <section className="mb-10 relative">
          <div className="w-full h-80 bg-gray-300 relative">
            <div className="absolute top-4 left-4 text-white">
              <span className="bg-black text-white text-xs px-2 py-1">Football</span>
              <div className="mt-32">
                <p className="text-xs">Antoine France-Presse · 04 June 2023</p>
                <h3 className="text-2xl font-bold text-white mt-1">LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS</h3>
                <p className="text-sm text-white mt-2">The Local League Finals Top Scorer is the individual award for the player that gained the highest points in the final stage of Finals.</p>
              </div>
            </div>
          </div>
          
          {/* Slider navigation */}
          <div className="flex justify-center mt-4 items-center">
            <button 
              onClick={() => handlePrev(setCurrentSlide)} 
              className="w-8 h-8 flex items-center justify-center bg-gray-300 mr-2"
            >
              &lt;
            </button>
            
            {[1, 2, 3, 4].map((num) => (
              <button 
                key={num}
                onClick={() => goToSlide(setCurrentSlide, num)} 
                className={`w-6 h-6 mx-1 flex items-center justify-center ${currentSlide === num ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
              >
                {num}
              </button>
            ))}
            
            <button 
              onClick={() => handleNext(setCurrentSlide)} 
              className="w-8 h-8 flex items-center justify-center bg-gray-300 ml-2"
            >
              &gt;
            </button>
          </div>
        </section>

        {/* Recent News and Clubs Ranking */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Recent News */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent News</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-500">January 17, June 2023</p>
                  <h4 className="font-bold">Glory 2023 Taekwondo Championship</h4>
                  <p className="text-xs text-gray-600">Martial arts fans from around the world gathered for...</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-500">January 16, June 2023</p>
                  <h4 className="font-bold">Open Championship: Team Sweden Leads</h4>
                  <p className="text-xs text-gray-600">Sweden has taken an early lead in the annual...</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-32 h-24 bg-gray-300 mr-4 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-gray-500">January 15, June 2023</p>
                  <h4 className="font-bold">Arsenal Tour of England Sells Out</h4>
                  <p className="text-xs text-gray-600">The Gunners' summer tour has sold out all venues...</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Clubs Ranking */}
          <div>
            <h3 className="text-xl font-bold mb-6">Clubs Ranking</h3>
            
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Club</th>
                  <th className="p-2 text-center">MP</th>
                  <th className="p-2 text-center">W</th>
                  <th className="p-2 text-center">D</th>
                  <th className="p-2 text-center">L</th>
                  <th className="p-2 text-center">F</th>
                  <th className="p-2 text-center">A</th>
                  <th className="p-2 text-center">GD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">1</span> Manchester City</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">29</td>
                  <td className="p-2 text-center">5</td>
                  <td className="p-2 text-center">4</td>
                  <td className="p-2 text-center">95</td>
                  <td className="p-2 text-center">35</td>
                  <td className="p-2 text-center">73</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">2</span> Liverpool</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">28</td>
                  <td className="p-2 text-center">6</td>
                  <td className="p-2 text-center">4</td>
                  <td className="p-2 text-center">89</td>
                  <td className="p-2 text-center">35</td>
                  <td className="p-2 text-center">66</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">3</span> Chelsea</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">21</td>
                  <td className="p-2 text-center">9</td>
                  <td className="p-2 text-center">8</td>
                  <td className="p-2 text-center">76</td>
                  <td className="p-2 text-center">35</td>
                  <td className="p-2 text-center">43</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">4</span> Tottenham Hotspur</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">20</td>
                  <td className="p-2 text-center">5</td>
                  <td className="p-2 text-center">13</td>
                  <td className="p-2 text-center">69</td>
                  <td className="p-2 text-center">40</td>
                  <td className="p-2 text-center">29</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">5</span> Arsenal</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">22</td>
                  <td className="p-2 text-center">3</td>
                  <td className="p-2 text-center">13</td>
                  <td className="p-2 text-center">61</td>
                  <td className="p-2 text-center">48</td>
                  <td className="p-2 text-center">13</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 flex items-center"><span className="mr-2">6</span> Manchester United</td>
                  <td className="p-2 text-center">38</td>
                  <td className="p-2 text-center">16</td>
                  <td className="p-2 text-center">10</td>
                  <td className="p-2 text-center">12</td>
                  <td className="p-2 text-center">57</td>
                  <td className="p-2 text-center">57</td>
                  <td className="p-2 text-center">0</td>
                </tr>
              </tbody>
            </table>
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
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">Basketball</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Alex Will</span>
              </div>
              
              <h4 className="font-bold text-lg mb-2">5 Exercises Basketball Players Should Be Using To Develop Strength</h4>
              <p className="text-sm text-gray-600 mb-4">This article was written by Alex Williams from Henderson Junior College, a basketball guru of sorts who trains elite players.</p>
              
              <button className="bg-black text-white px-4 py-1 text-sm">Read More</button>
            </div>
            
            {/* Article 2 */}
            <div>
              <div className="relative mb-4">
                <div className="w-full h-40 bg-gray-300"></div>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">Hockey</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Paul James</span>
              </div>
              
              <h4 className="font-bold text-lg mb-2">Golden Knights not to fulfill owner's quest to win Stanley Cup in fifth year</h4>
              <p className="text-sm text-gray-600 mb-4">The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.</p>
              
              <button className="bg-black text-white px-4 py-1 text-sm">Read More</button>
            </div>
            
            {/* Article 3 */}
            <div>
              <div className="relative mb-4">
                <div className="w-full h-40 bg-gray-300"></div>
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">Badminton</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm">Emily Landis</span>
              </div>
              
              <h4 className="font-bold text-lg mb-2">'Outdoor' Badminton Gets Support From Local Federation</h4>
              <p className="text-sm text-gray-600 mb-4">The Badminton World Federation is developing Air Badminton and the country's governing body is backing the outdoor variant.</p>
              
              <button className="bg-black text-white px-4 py-1 text-sm">Read More</button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mb-10 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">NEWSLETTER SUBSCRIPTION</h3>
          
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
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">f</div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">ig</div>
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center text-white">tw</div>
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
                className={`w-6 h-6 mx-1 flex items-center justify-center ${currentNewsSlide === num ? 'bg-gray-800 text-white' : 'bg-gray-300'}`}
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