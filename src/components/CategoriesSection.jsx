import football from "../assets/category/soccer-ball-green-grass-soccer-field-generative-ai 1.png";
import basketBall from "../assets/category/close-up-basketball-outdoors 1.png";
import car from "../assets/category/sport-car-is-drifting-track-with-smoke-around-it 1.png";
import pingpong from "../assets/category/red-ping-pong-racket-sports-equipment 1.png";

const CategoriesSection = () => {
  return (
    <div className="px-3 sm:px-4 lg:px-[115px] pb-6 sm:pb-10">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 px-1">Category</h3>
      
      {/* Always minimum 2 cards per row */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Football */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              FOOTBALL
            </h2>
          </div>
          <div className="rounded-lg aspect-square">
            <img
              src={football}
              alt="Football in goal net"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Basketball */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="rounded-lg aspect-square">
            <img
              src={basketBall}
              alt="Basketball on court"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              BASKET
              <br />
              BALL
            </h2>
          </div>
        </div>

        {/* Car Sport */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              CAR SPORT
            </h2>
          </div>
          <div className="rounded-lg aspect-square">
            <img
              src={car}
              alt="Race car drifting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Table Tennis */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="rounded-lg aspect-square bg-black p-3 sm:p-4">
            <img
              src={pingpong}
              alt="Table tennis paddle and ball"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-auto bg-gray-100 p-3 sm:p-4 md:p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              TABLE
              <br />
              TENNIS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;