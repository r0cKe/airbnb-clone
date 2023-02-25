import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon as SolidHeart } from "@heroicons/react/24/solid";

const InfoCard = ({ item }) => {
  const { img, location, title, description, star, price, total } = item;
  const [fav, setFav] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row items-center py-7 pl-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t gap-3 sm:gap-0">
      <div className="relative h-52 w-80 flex-shrink-0">
        <Image className="rounded-2xl" src={img} fill alt={title} />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          {fav ? (
            <SolidHeart
              className="h-7 cursor-pointer text-red-400"
              onClick={() => setFav(false)}
            />
          ) : (
            <HeartIcon
              onClick={() => setFav(true)}
              className="h-7 cursor-pointer transition transform duration-200 active:scale-150"
            />
          )}
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
