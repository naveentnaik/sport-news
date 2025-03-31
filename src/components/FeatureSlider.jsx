import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cyclist from "../assets/FeatureCarousel/two-opposing-players-give-handshake-end-game 1.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const FeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const carouselItems = [
    {
      tag: t("featureSlider.newsItems.1.tag"),
      source: t("featureSlider.newsItems.1.source"),
      date: t("featureSlider.newsItems.1.date"),
      title: t("featureSlider.newsItems.1.title"),
      description: t("featureSlider.newsItems.1.description"),
      image: cyclist
    },
    {
      tag: t("featureSlider.newsItems.2.tag"),
      source: t("featureSlider.newsItems.2.source"),
      date: t("featureSlider.newsItems.2.date"),
      title: t("featureSlider.newsItems.2.title"),
      description: t("featureSlider.newsItems.2.description"),
      image: cyclist
    },
    {
      tag: t("featureSlider.newsItems.3.tag"),
      source: t("featureSlider.newsItems.3.source"),
      date: t("featureSlider.newsItems.3.date"),
      title: t("featureSlider.newsItems.3.title"),
      description: t("featureSlider.newsItems.3.description"),
      image: cyclist
    },
    {
      tag: t("featureSlider.newsItems.4.tag"),
      source: t("featureSlider.newsItems.4.source"),
      date: t("featureSlider.newsItems.4.date"),
      title: t("featureSlider.newsItems.4.title"),
      description: t("featureSlider.newsItems.4.description"),
      image: cyclist
    }
  ];
  

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
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
    <div className="px-3 sm:px-4 lg:px-[105px] py-4 sm:py-6">
      {/* Carousel */}
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="relative h-80 md:h-96 lg:h-[450px] -mb-[6px] bg-gray-800 overflow-hidden rounded-t-lg">
              {/* Background image */}
              <img
                src={item.image}
                alt={item.tag}
                className="w-full h-full object-cover brightness-55"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-6">
                {/* Top section with tag */}
                <div>
                  <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-2 border border-white text-white text-xs sm:text-sm font-medium rounded">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom section with title and description */}
                <div className="max-w-3xl">
                  <div className="text-white text-xs sm:text-sm mb-1 sm:mb-2">
                    {item.source} - {item.date}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight tracking-tighter line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation controls */}
        <div className="flex items-center max-md:rounded-t-sm justify-between sm:justify-end py-3 sm:py-4 px-3 sm:px-8 mx-[1px] sm:mx-[9.5px] space-x-2 sm:space-x-4 bg-gray-200 rounded-b-sm">
          <button
            onClick={goToPrev}
            className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-3 sm:px-5 py-2 sm:py-3 rounded transition-colors"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-xs sm:text-sm" />
          </button>

          {/* Pagination dots - hidden on smallest screens */}
          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center transition-colors ${
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

          {/* Mobile pagination indicator */}
          <div className="flex sm:hidden items-center justify-center">
            <span className="text-gray-700 font-medium">
              {currentSlide + 1}/{carouselItems.length}
            </span>
          </div>

          <button
            onClick={goToNext}
            className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-3 sm:px-5 py-2 sm:py-3 rounded transition-colors"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-xs sm:text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;