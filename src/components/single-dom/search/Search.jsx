import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  return (
    <div>
      <div class="">
        <div class=" flex justify-center items-center">
          <div class="relative">
            <input
              type="text"
              class="h-9 text-sm font-light w-60
           border border-black  px-2 py-4 bg-slate-100  z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />
            <div class="absolute top-1/2 right-2 transform -translate-x-0 -translate-y-1/2">
              <span class="h-8 w-20 text-black ">
                <AiOutlineSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
