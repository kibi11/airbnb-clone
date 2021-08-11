import Image from "next/image";
import {
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 ">
      {/* I am the header; */}
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className=" flex items-center md:border-2 rounded-full md:shadow-sm py-2">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Hit this search !"
        />
        <SearchIcon className=" hidden md:inline-flex md:mx-2 h-8 bg-red-400  text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end space-x-4">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex justify-center border-2 space-x-2 rounded-full p-2">
          <MenuAlt1Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
