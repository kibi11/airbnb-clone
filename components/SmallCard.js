import Image from "next/image";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 cursor-pointer rounded-lg hover:bg-gray-300 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};
export default SmallCard;
