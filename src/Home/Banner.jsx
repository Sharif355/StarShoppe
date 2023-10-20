/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div className="container mx-auto bg-slate-100 px-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <div className=" w-full space-y-3">
          <h1 className="text-5xl">
            Unlocking <br /> the <br /> World's Best.
          </h1>
          <p className="font-normal text-gray-400">
            Your Gateway to Entertainment Excellence. Discover, Enjoy, and
            Experience <br /> the Global Stage of Entertainment.
          </p>
        </div>
        <div className=" w-full flex items-center justify-center">
          <img
            className="w-[500px]"
            src="https://i.ibb.co/mTJ6m68/film-162028-1920.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
