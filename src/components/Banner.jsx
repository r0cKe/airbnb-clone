import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:[700px] ">
      <Image
        className=""
        src="https://links.papareact.com/0fm"
        alt="banner image"
        fill
      />
      <div className="absolute top-[110px] sm:top-[160px] md:top-1/2 w-full text-center">
        <p className="text-gray-600 font-bold text-sm sm:text-lg">
          Not sure where to go? Perfect.
        </p>

        <button className="bg-white text-purple-500 px-10 py-4 rounded-full font-bold my-3 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;