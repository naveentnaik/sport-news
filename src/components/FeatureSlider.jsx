import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cyclist from "../assets/FeatureCarousel/two-opposing-players-give-handshake-end-game 1.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const FeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Sample carousel items
  const carouselItems = [
    {
      tag: "Football",
      source: "Agence France-Presse",
      date: "04 June 2023",
      title:
        "LIONEL MESSI LEAVING LIGUE 1 TEAM PARIS SAINT-GERMAIN, CLUB CONFIRMS",
      description:
        "The EuroLeague Finals Top Scorer is the individual award for the player that gained the highest points in the EuroLeague Finals",
      image: cyclist
    },
    {
      tag: "Basketball",
      source: "Sports Center",
      date: "03 June 2023",
      title: "NBA FINALS SET TO BEGIN WITH DENVER FACING MIAMI HEAT",
      description:
        "The Denver Nuggets will face the Miami Heat in the NBA Finals starting Thursday in what promises to be an exciting matchup",
      image: cyclist
    },
    {
      tag: "Tennis",
      source: "Roland Garros",
      date: "03 June 2023",
      title: "SWIATEK AND DJOKOVIC ADVANCE TO FRENCH OPEN QUARTER-FINALS",
      description:
        "Defending champions Iga Swiatek and Novak Djokovic both secured straight-set victories to advance to the quarter-finals",
      image: cyclist
    },
    {
      tag: "Formula 1",
      source: "F1 News",
      date: "05 June 2023",
      title: "VERSTAPPEN EXTENDS CHAMPIONSHIP LEAD WITH SPANISH GP VICTORY",
      description:
        "Red Bull's Max Verstappen dominated the Spanish Grand Prix to extend his lead in the drivers' championship",
      image: cyclist,
    },
  ];

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed:800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    arrows: false, 
  };

  // Navigation functions
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();
  const goToSlide = (index) => sliderRef.current?.slickGoTo(index);

  return (
    <div className="md:px-[105px] py-6">
      {/* Carousel */}
      
      <div className="relative rounded-lg ">
        
        <Slider  ref={sliderRef} {...settings}  >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative h-[450px] -mb-[6px] bg-gray-800 overflow-hidden ">
              {/* Background image */}
              <img
                src={item.image}
                alt={item.tag}
                className="w-full h-full object-cover brightness-55"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top section with tag */}
                <div>
                  <span className="inline-block px-4 py-2 border border-white text-white text-sm font-medium rounded">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom section with title and description */}
                <div className="max-w-3xl">
                  <div className="text-white text-sm mb-2">
                    {item.source} - {item.date}
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-white text-lg leading-tight tracking-tighter">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-end py-4 px-8 mx-[9.5px] space-x-4 bg-gray-200">
        <button
          onClick={goToPrev}
          className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-5 py-3 rounded transition-colors"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>

        {/* Pagination dots */}
        <div className="flex items-center space-x-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === index
                  ? "bg-gray-900 text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-200"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goToNext}
          className=" bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-5 py-3 rounded transition-colors"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
      </div>

      {/* Navigation controls */}
     
    </div>
  );
};

export default FeatureSlider;
