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


const SportsArticle = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const articles = [
    {
      category: "Basketball",
      author: "Alex Will",
      authorImage: "",
      title:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
      image: basketball,
      date:"O5 june 2023",
      profile:profile
    },
    {
      category: "Hockey",
      author: "Paul James",
      authorImage: "",
      title:
        "Golden Knights not to fulfill owner's quest to win Stanley Cup in fifth year",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: hockyPlayers,
      date:"O8 may 2023",
      profile:profile

    },
    {
      category: "Badminton",
      author: "Emily Landis",
      authorImage: "",
      title: "'Outdoor' Badminton Gets Support From Local Federation",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: shuttlecocks,
      date:"O4 apr 2023",
      profile:profile
    },
    {
      category: "Football",
      author: "Mark Johnson",
      authorImage: "",
      title:
        "Premier League announces summer schedule for pre-season tournaments",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
      image: basketball,
      date:"14 aug 2023",
      profile:profile

    },
    {
      category: "Tennis",
      author: "Sarah Parker",
      authorImage: "",
      title: "Wimbledon preparations affected by unusual British weather",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: shuttlecocks,
      date:"22 may 2023",
      profile:profile
    },
    {
      category: "Swimming",
      author: "David Chen",
      authorImage: "",
      title: "New Olympic-sized pool opens in downtown metro area",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: hockyPlayers,
      date:"29 sep 2023",
      profile:profile
    },
    {
      category: "Golf",
      author: "James Wilson",
      authorImage: "",
      title: "PGA Tour announces new tournament format for next season",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: basketball,
      date:"01 jan 2024",
      profile:profile
    },
    {
      category: "Athletics",
      author: "Lisa Brown",
      authorImage: "",
      title:
        "Local sprinter breaks regional record at university championships",
      description:
        "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
      image: shuttlecocks,
      date:"14 aug 2023",
      profile:profile
    },
    {
      category: "Cricket",
      author: "Raj Patel",
      authorImage: "",
      title: "T20 World Cup qualifiers see surprising upsets in group stages",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
      image: hockyPlayers,
      date:"29 sep 2023",
      profile:profile
    },
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
      <h3 className="text-xl font-bold mb-6">Sports Articles</h3>

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
