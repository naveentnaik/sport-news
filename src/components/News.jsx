import boxing from "../assets/News/empty-boxing-arena-waiting-new-round-d-render-illustration 1.png";
import raceHorse from "../assets/News/race-hose 1.png";
import sportsman from "../assets/News/sportsman-drinking-water-training-stationary-bike 1.png";
import cyclist from "../assets/News/cyclist-leads-actionfront-view-man-riding-bicycle-racing-road 1.png";

const newsData = [
  {
    id: 1,
    image: raceHorse,
    title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
    date: "Race98 - 03 June 2023",
    description:
      "NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week's",
  },
  {
    id: 2,
    image: cyclist,
    title: "Savilia Blunk Embraces Longer Season With World Cup",
    date: "JonyLs - 03 June 2023",
    description:
      "Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some",
  },
  {
    id: 3,
    image: boxing,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "King.F - 03 June 2023",
    description:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
  },
];

export const News = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-[115px] py-6 pb-10">
      <div className="max-w-6xl rounded-sm bg-[#EBEEF3] mx-auto flex flex-col-reverse lg:flex-row gap-3 sm:gap-5">
        {/* News Section */}
        <div className="w-full lg:flex-1 p-3 sm:p-4 md:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Trending News
          </h2>

          {/* Mapping over newsData */}
          {newsData.map((news) => (
            <div key={news.id} className="flex flex-col sm:flex-row mb-3 pb-4">
              <img
                src={news.image}
                alt={news.title}
                className="w-full sm:w-50 h-78 sm:h-33 rounded-lg object-cover mb-3 sm:mb-0 sm:mr-6"
              />
              <div className="border-b border-gray-300 pb-3 sm:pb-0">
                <div className="text-gray-500 text-[10px] mb-1">{news.date}</div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-gray-600 text-xs">{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="w-full lg:w-[50%] h-64 sm:h-80 md:h-96 lg:h-auto rounded-sm overflow-hidden relative">
          <div className="w-full h-full object-cover filter brightness-60">
            <img src={sportsman} alt="Cycling Class" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 flex flex-col justify-between p-3 sm:p-5">
            <div>
              <span className="px-2 sm:px-4 py-1 text-sm sm:text-lg backdrop-blur-sm border-[1px] border-white rounded-sm text-white">
                Cycling
              </span>
            </div>
            <div>
              <div className="text-white text-xs sm:text-md mb-1 sm:mb-2">
                Debits - 03 June 2023
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
