import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="bg-black">
      <div className="flex relative p-5 h-100 mt-5 bg-pink-100 rounded-lg">
        <div className="relative h-60 w-80 p-5">
          <Image src={img} layout="fill" className="rounded-lg" />
        </div>

        <div className="relative h-60 w-80 ">
          <h3>{location}</h3>
          <h1 className="font-semibold ">{title}</h1>
          <p className="text-gray-400">{description}</p>
          <p className="flex">
            <p>
              <StarIcon className="h-5 text-[#FFA500]" />
            </p>
            <p>{star}</p>
          </p>
          <h1>{price}</h1>
          <h2>{total}</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
