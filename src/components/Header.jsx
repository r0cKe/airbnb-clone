import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon, UsersIcon } from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  });
  const [noOfGuests, setNoOfGuests] = useState(0);

  const router = useRouter();

  const handleDaysSelect = (ranges) => {
    setSelectionRange((prev) => {
      return {
        ...prev,
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      };
    });
  };

  const handleSearch = () => {
    setSearchInput("");
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: selectionRange.startDate.toString().slice(3, 15),
        endDate: selectionRange.endDate.toString().slice(3, 15),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-3 shadow-md md:px-10 md:py-5">
      {/* logo */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb logo"
          width="150"
          height="75"
        />
      </div>

      {/* Search */}
      <div className="flex items-center md:border-2 rounded-full md:py-2 md:shadow-sm">
        <input
          className="pl-5 w-28 md:w-auto outline-none flex-grow bg-transparent text-gray-600 placeholder:text-gray-400 text-xs md:text-sm"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-2 md:space-x-4 items-center justify-end text-gray-500">
        <p className="cursor-pointer hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-5 md:h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-1 md:p-2 rounded-full">
          <Bars3Icon className="h-5 md:h-6 cursor-pointer" />
          <UserCircleIcon className="h-5 md:h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleDaysSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 outline-none text-lg text-red-400"
              min={0}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
