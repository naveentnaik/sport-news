import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import football from "../assets/Category/soccerball.png";
import basketBall from "../assets/Category/basketball.png";
import car from "../assets/Category/sport-car-is-drifting-track-with-smoke-around-it.png";
import pingpong from "../assets/Category/red-ping-pong-racket-sports-equipment.png";

const CategoriesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        categoryRefs.current.forEach((category, index) => {
          setTimeout(() => {
            const animationClass = index % 2 === 0 ? 'animate-fadeInFromBottom' : 'animate-fadeInFromTop';
            category.classList.add(animationClass);
            category.style.opacity = 1;
          }, index * 300); 
        });
        observer.disconnect();
      }
    }, options);

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
    <div 
      ref={sectionRef}
      className="px-3 sm:px-4 lg:px-[115px] pb-6 sm:pb-10"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 px-1">{t('category.category')}</h3>
      
      <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div 
          ref={el => categoryRefs.current[0] = el} 
          className="flex flex-col gap-3 sm:gap-4 w-full opacity-0 transition-all duration-700"
        >
          <div className="flex-1 h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              {t('category.football')}
            </h2>
          </div>
          <div className="max-md:h-[228px] rounded-lg aspect-square">
            <img
              src={football}
              alt={t('category.football')}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div 
          ref={el => categoryRefs.current[1] = el} 
          className="flex flex-col gap-3 sm:gap-4 w-full opacity-0 transition-all duration-700"
        >
          <div className="max-md:h-[228px] lg:h-[228px] rounded-lg aspect-square">
            <img
              src={basketBall}
              alt={t('category.basketball')}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              {t('category.basketball')}
            </h2>
          </div>
        </div>

        <div 
          ref={el => categoryRefs.current[2] = el} 
          className="flex flex-col gap-3 sm:gap-4 w-full opacity-0 transition-all duration-700"
        >
          <div className="h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              {t('category.carSport')}
            </h2>
          </div>
          <div className="max-md:h-[228px] rounded-lg aspect-square">
            <img
              src={car}
              alt={t('category.carSport')}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div 
          ref={el => categoryRefs.current[3] = el} 
          className="flex flex-col gap-3 sm:gap-4 w-full opacity-0 transition-all duration-700"
        >
          <div className="max-md:h-[228px] lg:h-[228px] rounded-lg aspect-square bg-black p-3 sm:p-4">
            <img
              src={pingpong}
              alt={t('category.tableTennis')}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              {t('category.tableTennis')}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;