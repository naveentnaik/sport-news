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
import { useEffect, useRef } from "react";
import Lenis from "lenis";

function App() {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        if (leftColumnRef.current) {
          leftColumnRef.current.classList.add("animate-slide-in-left");
          leftColumnRef.current.style.opacity = 1;
        }

        setTimeout(() => {
          if (rightColumnRef.current) {
            rightColumnRef.current.classList.add("animate-slide-in-right");
            rightColumnRef.current.style.opacity = 1;
          }
        }, 300);

        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
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
        <section
          id="recent-news"
          className="px-4 md:px-8 lg:px-[115px] pt-8 pb-6"
          ref={sectionRef}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div
              className="w-full lg:w-1/2 opacity-0 transition-all duration-700"
              ref={leftColumnRef}
            >
              <RecentNews />
            </div>

            <div
              className="w-full lg:w-1/2 opacity-0 transition-all duration-700"
              ref={rightColumnRef}
            >
              <ClubRankings />
            </div>
          </div>

          {/* Add keyframes for the animations */}
          <style jsx>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-40px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(40px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            :global(.animate-slide-in-left) {
              animation: slideInLeft 0.8s ease-out forwards;
            }

            :global(.animate-slide-in-right) {
              animation: slideInRight 0.8s ease-out forwards;
            }
          `}</style>
        </section>

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
