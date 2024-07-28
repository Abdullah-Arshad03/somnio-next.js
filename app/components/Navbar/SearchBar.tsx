import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex  w-96 p-1 pr-4 pl-4 rounded-2xl justify-between bg-white">
      <input
        className="text-sm bg-transparent text-gray-500"
        type="text"
        placeholder="Buscar Productos ...."
      />
      <div
        className="flex items-center
       "
      >
        <FaSearch color="gray" size={12} stroke="" />
      </div>
    </div>
  );
};
export default SearchBar;
