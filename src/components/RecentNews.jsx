import React from "react";
import karate from "../assets/RecentNews/karate-fighters 1.png";
import boxing from "../assets/RecentNews/boxing.png";
import cricket from "../assets/RecentNews/cricket.png";
import golf from "../assets/RecentNews/golf.png";
import { useTranslation } from "react-i18next";

const RecentNews = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-4">{t("recentNews.title")}</h3>
      <div className=" flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Featured news - stacks on mobile, side by side on larger screens */}
        <div className="w-full lg:w-1/2 relative rounded-sm overflow-hidden bg-gray-200 shadow-md mb-4 md:mb-0">
          <div className="w-full">
            <img
              src={karate}
              alt="Taekwondo Championship"
              className="w-full object-cover rounded-md mb-2"
            />
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-white/20 backdrop-blur-sm text-white">
            <div className="mb-1 text-xs">{t("recentNews.featuredNews.label")}</div>
            <h2 className="text-xs md:text-base leading-tight">
              {t("recentNews.featuredNews.title")}
            </h2>
          </div>
        </div>

        {/* News cards section */}
        <div className=" w-full lg:w-1/2">
          <div className="h-full flex rounded-sm bg-[#EBEEF3] mx-auto ">
            <div className="h-full flex justify-evenly flex-col gap-3 md:gap-[14px] flex-1 p-3">
              {/* News Card 1 */}
              <div className="flex flex-row">
                <img
                  src={boxing}
                  alt="Boxing"
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-lg object-cover mr-3"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-gray-500 text-[10px] mb-1">
                    {t("recentNews.news1.date")}
                  </div>
                  <h3 className="text-xs font-semibold text-gray-800">
                    {t("recentNews.news1.title")}
                  </h3>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="flex flex-row">
                <img
                  src={cricket}
                  alt="Cricket"
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-lg object-cover mr-3"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-gray-500 text-[10px] mb-1">
                    {t("recentNews.news2.date")}
                  </div>
                  <h3 className="text-xs font-semibold text-gray-800">
                    {t("recentNews.news2.title")}
                  </h3>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="flex flex-row">
                <img
                  src={golf}
                  alt="Golf"
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-lg object-cover mr-3"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-gray-500 text-[10px] mb-1">
                    {t("recentNews.news3.date")}
                  </div>
                  <h3 className="text-xs font-semibold text-gray-800">
                    {t("recentNews.news3.title")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;