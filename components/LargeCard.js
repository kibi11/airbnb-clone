import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  console.log(img);
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3 ">{title}</h3>
        <p>{description}</p>
        <button className="text-sm bg-gray-900 text-white py-2 rounded-lg mt-3 px-4">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
