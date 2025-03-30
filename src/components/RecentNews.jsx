import karate from "../assets/RecentNews/karate-fighters 1.png";
import boxing from "../assets/RecentNews/boxing.png";
import cricket from "../assets/RecentNews/cricket.png";
import golf from "../assets/RecentNews/golf.png";

const RecentNews = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Recent News</h3>
      <div className="flex gap-6">
        <div className="w-1/2 flex-1 relative max-w-[230px] rounded-lg overflow-hidden bg-gray-200 shadow-md">
          <div className="w-full">
            <img
              height={270}
              src={karate}
              alt="Runner"
              className="object-cover rounded-md mb-2"
            />
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-white/20 backdrop-blur-sm text-white">
            {/* Race info and date */}
            <div className=" mb-1 text-[10px]">Day 5 Highlights</div>

            {/* Headline */}
            <h2 className="text-sm leading-tight">
              Baku 2023 World Taekwondo Championships
            </h2>
          </div>
        </div>

        <div className="w-1/2 flex-1">
          <div className="rounded-sm bg-[#EBEEF3] mx-auto flex">
            <div className="flex flex-col gap-[14px] flex-1 p-3">
              {/* News Card 1 */}
              <div className="flex ">
                <img
                  src={boxing}
                  alt="Horse Racing"
                  className="w-[70px] h-[70px] rounded-lg object-cover mr-3"
                />
                <div>
                  <div className="text-gray-500 text-[10px] mb-1">
                    #Pollar. 87 - 12 July 2023
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Baku 2023 Taekwondo Championships
                  </h3>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="flex ">
                <img
                  src={cricket}
                  alt="cyclist"
                  className="w-[70px] h-[70px] rounded-lg object-cover mr-3"
                />
                <div>
                  <div className="text-gray-500 text-[10px] mb-1">
                    #Goft. Toni - 20 July 2023
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Open Championship Royal Liverpool Golf
                  </h3>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="flex">
                <img
                  src={golf}
                  alt="Boxing Ring"
                  className="w-[70px] h-[70px] rounded-lg object-cover mr-3"
                />
                <div>
                  <div className="text-gray-500 text-[10px] mb-1">
                    #Cricket. Toni - 27 July 2023
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Ireland Tour of England Test 2023
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
