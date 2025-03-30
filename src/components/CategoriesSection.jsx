import football from "../assets/category/soccer-ball-green-grass-soccer-field-generative-ai 1.png";
import basketBall from "../assets/category/close-up-basketball-outdoors 1.png";
import car from "../assets/category/sport-car-is-drifting-track-with-smoke-around-it 1.png";
import pingpong from "../assets/category/red-ping-pong-racket-sports-equipment 1.png";

const CategoriesSection = () => {
  return (
    <div className="md:px-[115px] pb-10">
      <h3 className="text-2xl font-semibold mb-6">Category</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Football */}
        <div className="flex flex-col gap-4 max-w-[300px] flex-1">
          <div className="h-[30%] bg-gray-100 p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              FOOTBALL
            </h2>
          </div>
          <div className="rounded-lg flex-1">
            <img
              src={football}
              alt="Football in goal net"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Basketball */}
        <div className="flex flex-col gap-4 max-w-[300px] flex-1">
          <div className="h-[10%] rounded-lg flex-1">
            <img
              src={basketBall}
              alt="Basketball on court"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[40%] bg-gray-100 p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              BASKET
              <br />
              BALL
            </h2>
          </div>
        </div>

        {/* Car Sport */}
        <div className="flex flex-col gap-4 max-w-[300px] flex-1">
          <div className="h-[30%] bg-gray-100 p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
              CAR SPORT
            </h2>
          </div>
          <div className="rounded-lg flex-1">
            <img
              src={car}
              alt="Race car drifting"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Table Tennis */}
        <div className="flex flex-col gap-4 max-w-[300px] flex-1">
          <div className="rounded-lg flex-1 py-4 bg-black">
            <img
              src={pingpong}
              alt="Table tennis paddle and ball"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[30%] bg-gray-100 p-6 flex items-center justify-center rounded-lg">
            <h2 className="text-3xl text-center font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 from-0% to-gray-400 to-70%">
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
