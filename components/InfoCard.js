import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex px-2 py-7 border-b hover:opacity-80 hover:shadow-lg transition transform duration-100 ease-out cursor-pointer first:border-t">
      <div className="relative h-30 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <h3>{location}</h3>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h1 className="text-xl ">{title}</h1>
        <div className="border-b w-10 pt-2" />

        <p className="text-gray-400 pt-2 text-sm flex-grow">{description}</p>
        <div className="flex justify-end text-xl font-semibold pb-2 lg:text-2xl">
          <p>{price}</p>
        </div>

        <div className="flex justify-between pt-2">
          <p className="flex items-center space-x-1">
            <p>
              <StarIcon className="h-5 text-[#FFA500]" />
            </p>
            <p>{star}</p>
          </p>
          <p className="font-extralight">{total}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
