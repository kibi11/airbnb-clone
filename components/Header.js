import Image from "next/image";
import {
  GlobeAltIcon,
  MenuAlt1Icon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    console.log("doing something");
    router.push("/search");
  };
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 ">
      {/* I am the header; */}
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-5">
            <h2 className="text-2xl pl-2 flex-grow font-semibold">
              Number of guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              className="w-12 text-red-1200 pl-2 text-lg outline-none"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-600">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
