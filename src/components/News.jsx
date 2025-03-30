import boxing from "../assets/News/empty-boxing-arena-waiting-new-round-d-render-illustration 1.png";
import raceHorse from "../assets/News/race-hose 1.png";
import sportsman from "../assets/News/sportsman-drinking-water-training-stationary-bike 1.png";
import cyclist from "../assets/News/cyclist-leads-actionfront-view-man-riding-bicycle-racing-road 1.png";

export const News = () => {
  return (
    <div className="md:px-[115px] py-6 pb-10 ">
      <div className="max-w-6xl rounded-sm bg-[#EBEEF3] mx-auto flex gap-5">
        {/* News Section */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Trending News
          </h2>

          {/* News Card 1 */}
          <div className="flex mb-3 pb-4 ">
            <img
              src={raceHorse}
              alt="Horse Racing"
              className="w-50 h-33 rounded-lg object-cover mr-6"
            />
            <div className="border-b border-gray-300">
              <div className="text-gray-500 text-[10px] mb-1">
                Race98 - 03 June 2023
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                6-Year-Old Horse Dies at Belmont Park After Race Injury
              </h3>
              <p className="text-gray-600 text-xs">
                NEW YORK—A 6-year-old horse died after being injured in a race
                at Belmont Park ahead of next week's
              </p>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="flex mb-3 pb-4">
            <img
              src={cyclist}
              alt="cyclist"
              className="w-50 h-33 rounded-lg object-cover mr-6"
            />
            <div className="border-b border-gray-300">
              <div className="text-gray-500 text-[10px] mb-1">
                JonyLs - 03 June 2023
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Savilia Blunk Embraces Longer Season With World Cup
              </h3>
              <p className="text-gray-600 text-xs">
                Last year, Savilia Blunk took a more conservative approach to
                her first season as an Elite Class athlete, skipping some
              </p>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="flex">
            <img
              src={boxing}
              alt="Boxing Ring"
              className="w-50 h-33 rounded-lg object-cover mr-6"
            />
            <div>
              <div className="text-gray-500 text-[10px] mb-1">
                King.F - 03 June 2023
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Ryan Garcia is fighting again, this time on social media
              </h3>
              <p className="text-gray-600 text-xs">
                Boxing star Ryan Garcia and his promoter, Hall of Fame fighter
                Oscar De La Hoya, reignited their war of words via Twitter on
              </p>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="w-[50%] rounded-sm overflow-hidden relative">
          <div className="w-full h-full object-cover filter brightness-60">
            <img
              src={sportsman}
              alt="Cycling Class"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 flex flex-col justify-between p-5">
            <div>
              <span className="px-4 py-1 text-lg backdrop-blur-sm border-[1px] border-white rounded-sm text-white ">
                Cycling
              </span>
            </div>
            <div>
              <div className="text-white text-md mb-2">
                Debits - 03 June 2023
              </div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
