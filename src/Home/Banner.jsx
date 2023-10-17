import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        background: `url('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="##e7008a" fill-opacity="1" d="M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,192C560,160,640,128,720,138.7C800,149,880,203,960,224C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>')`,
      }}
      className="flex flex-col md:flex-row items-center justify-center gap-2"
    >
      <div className=" w-full space-y-3">
        <h1 className="text-5xl">Unlocking the World's Best.</h1>
        <p className="">
          Your Gateway to Entertainment Excellence. Discover, Enjoy, and
          Experience the Global Stage of Entertainment.
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
  );
};

export default Banner;
