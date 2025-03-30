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

function App() {
  
  return (
    <div className="bg-[#F9FAFC]">
      <Navbar />

      <main className="container mx-auto">
       
        <HeroSection />

        <CategoriesSection />

        <News />

        <FeatureSlider />

        {/* Recent News and Clubs Ranking */}
        <section className="md:px-[115px] pt-8 pb-6 flex justify-between gap-6">
          <div className="w-1/2 flex-1">
            <RecentNews />
          </div>

          <div className="w-1/2 flex-1">
            <ClubRankings />
          </div>
        </section>

        {/* Sports Articles */}
        <SportsArticle/>

        <ContactForm/>
       
      </main>
    </div>
  );
}

export default App;
