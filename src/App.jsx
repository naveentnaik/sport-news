import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import { News } from "./components/News";
import FeatureSlider from "./components/FeatureSlider";
import RecentNews from "./components/RecentNews";
import ClubRankings from "./components/ClubRankings";
import SportsArticle from "./components/SportsArticle";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      smooth: true,
      ease: (t) => 1 - Math.pow(1 - t, 2), 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); 
  }, []);


  return (
    <div className="bg-[#F9FAFC]">
      <Navbar />

      <main className="container mx-auto">
        <section id="home">
          <HeroSection />
        </section>

        <section id="category">
          <CategoriesSection />
        </section>

        <section id="trending-news">
          <News />
        </section>

        <section id="feature-slider">
          <FeatureSlider />
        </section>

        {/* Recent News and Clubs Ranking */}
        <section id="recent-news" className="px-4 md:px-8 lg:px-[115px] pt-8 pb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
              <RecentNews />
            </div>

            <div className="w-full lg:w-1/2">
              <ClubRankings />
            </div>
          </div>
        </section>

        {/* Sports Articles */}
        <section id="sports-article">
          <SportsArticle />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
