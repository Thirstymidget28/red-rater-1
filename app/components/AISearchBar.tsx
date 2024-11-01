"use client";
import React from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <form className="h-fit w-full mr-10">
      <label className="input input-bordered flex items-center gap-2 rounded-3xl bg-gray-400 h-10 sm:h-12 2xl:h-14 w-4/5">
        <input
          type="text"
          placeholder="Message Red Rater"
          className="grow text-gray-200 placeholder:text-gray-200 placeholder:font-normal text-sm sm:text-base w-full"
        />
        <img
          src="/MagnifyingGlass.svg"
          alt="magnify glass"
          className="h-1/2 opacity-70"
        />
      </label>
    </form>
  );
};

export default SearchBar;
