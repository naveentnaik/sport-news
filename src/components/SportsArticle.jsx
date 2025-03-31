import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import shuttlecocks from "../assets/SportsArticle/three-white-shuttlecocks-badminton-racquet 1.png";
import basketball from "../assets/SportsArticle/basketball-equipment 1.png";
import hockyPlayers from "../assets/SportsArticle/hockey-players 1.png";
import profile from "../assets/SportsArticle/profile.png";
import { useTranslation } from "react-i18next";


const SportsArticle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
   const { t } = useTranslation();

  const articles = [
    {
      id: 1,
      category: t('articles.1.category'), 
      author: t('articles.1.author'), 
      authorImage: "",
      title: t('articles.1.title'), 
      description: t('articles.1.description'), 
      image: basketball,
      date: t('articles.1.date'), 
      profile: profile
    },
    {
      id: 2,
      category: t('articles.2.category'), 
      author: t('articles.2.author'), 
      authorImage: "",
      title: t('articles.2.title'),
      description: t('articles.2.description'),
      image: hockyPlayers,
      date: t('articles.2.date'),
      profile: profile
    },
    {
      id: 3,
      category: t('articles.3.category'),
      author: t('articles.3.author'),
      authorImage: "",
      title: t('articles.3.title'), 
      description: t('articles.3.description'), 
      image: shuttlecocks,
      date: t('articles.3.date'), 
      profile: profile
    },
    {
      id: 4,
      category: t('articles.4.category'),
      author: t('articles.4.author'), 
      authorImage: "",
      title: t('articles.4.title'), 
      description: t('articles.4.description'), 
      image: basketball,
      date: t('articles.4.date'), 
      profile: profile
    },
    {
      id: 5,
      category: t('articles.5.category'), 
      author: t('articles.5.author'), 
      authorImage: "",
      title: t('articles.5.title'), 
      description: t('articles.5.description'), 
      image: shuttlecocks,
      date: t('articles.5.date'), 
      profile: profile
    },
    {
      id: 6,
      category: t('articles.6.category'), 
      author: t('articles.6.author'), 
      authorImage: "",
      title: t('articles.6.title'), 
      description: t('articles.6.description'), 
      image: hockyPlayers,
      date: t('articles.6.date'), 
      profile: profile
    },
    {
      id: 7,
      category: t('articles.7.category'),
      author: t('articles.7.author'), 
      authorImage: "",
      title: t('articles.7.title'), 
      description: t('articles.7.description'), 
      image: basketball,
      date: t('articles.7.date'), 
      profile: profile
    },
    {
      id: 8,
      category: t('articles.8.category'), 
      author: t('articles.8.author'), 
      authorImage: "",
      title: t('articles.8.title'), 
      description: t('articles.8.description'), 
      image: shuttlecocks,
      date: t('articles.8.date'),
      profile: profile
    },
    {
      id: 9,
      category: t('articles.9.category'), 
      author: t('articles.9.author'), 
      authorImage: "",
      title: t('articles.9.title'), 
      description: t('articles.9.description'), 
      image: hockyPlayers,
      date: t('articles.9.date'), 
      profile: profile
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    beforeChange: (_, next) => setCurrentSlide(next),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Navigation functions
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <section className="px-4 md:px-8 lg:px-[105px] py-6">
      <h3 className="text-xl font-bold mb-6">{t('articles.heading')}</h3>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {articles.map((article, index) => (
            <div key={index} >
              <div className="mx-auto">
                <div className="relative mb-4">
                <img 
                    src={article.image} 
                    alt={`${article.category} image`} 
                    className="w-full h-54 object-cover rounded-sm"
                  />
                  <span className="absolute top-2 right-2 border border-white rounded-sm text-white text-xs px-2 py-1">
                    {article.category}
                  </span>
                </div>

                <div className="flex items-center mb-2">
                  <img src={article.profile} className="w-8 h-8 rounded-full  mr-2"/>
                  <span className="text-sm">{article.author}</span>
                </div>

                <div className="py-2 text-sm text-gray-600">{article.date}</div>

                <h4 className="font-semibold text-lg mb-2">{article.title}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

     
      <div className="flex items-center justify-start  pl-2 mt-2 space-x-6 ">
        <button
          onClick={goToPrev}
          className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-5 py-3 rounded transition-colors"
          aria-label="Previous article"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={goToNext}
          className="bg-gray-400 hover:bg-gray-500 text-white hover:text-gray-900 px-5 py-3 rounded transition-colors"
          aria-label="Next article"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SportsArticle;
